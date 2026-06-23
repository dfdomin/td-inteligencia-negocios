/**
 * Progreso semanal directo a Supabase (sin localStorage como fuente de verdad).
 * Parchea PT.save / PT.addXP para llamar GamifSDK.syncWeekProgress sin botón ☁️.
 *
 * En semanas TGA, PT suele ser `const PT` en script inline (no visible desde este archivo).
 * exposePT() ejecuta un script inline que copia PT → window.PT y luego parchea.
 */
(function (global) {
  "use strict";

  function getPT() {
    if (global.PT) return global.PT;
    try {
      if (typeof PT !== "undefined") {
        global.PT = PT;
        return PT;
      }
    } catch (e) { /* cross-script lexical scope */ }
    return null;
  }

  function debounce(fn, ms) {
    var timer;
    return function () {
      var self = this;
      var args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () { fn.apply(self, args); }, ms);
    };
  }

  function cloudMode() {
    return global.GamifSDK && GamifSDK.isCloudDirectMode && GamifSDK.isCloudDirectMode();
  }

  function getCc() {
    var pt = getPT();
    if (pt && typeof pt.state === "function") {
      var st = pt.state();
      var cc = String(st.id_estudiante || st.cc || "").trim();
      if (cc.length >= 3) return cc;
    }
    if (global.GamifSDK) {
      var p = GamifSDK.loadProfile();
      return String(p.cc || p.id_estudiante || "").trim();
    }
    return "";
  }

  function getSemana() {
    var pt = getPT();
    if (pt && typeof pt.state === "function") {
      var s = pt.state();
      if (s.semana) return s.semana;
    }
    var path = global.location && global.location.pathname || "";
    var adm = path.match(/semana-0?(\d+)/i);
    if (adm) return parseInt(adm[1], 10);
    var m = path.match(/semana(\d+)/i);
    return m ? parseInt(m[1], 10) : null;
  }

  function isAdm18WeekPage() {
    var path = global.location && global.location.pathname || "";
    if (!/\/semana-\d+/i.test(path)) return false;
    if (global.IUBAdm18Reading && IUBAdm18Reading.isAdm18 && IUBAdm18Reading.isAdm18()) return true;
    if (global.GamifSDK && GamifSDK.getConfig().prefix === "adm18") return true;
    return /\/adm18-material\//i.test(path);
  }

  async function hydrateAdm18Week() {
    if (!isAdm18WeekPage() || !global.IUBAdm18Reading) return;
    var sem = getSemana();
    if (!sem) return;
    if (typeof IUBAdm18Reading.hydrateFromCloud === "function") {
      await IUBAdm18Reading.hydrateFromCloud(sem);
    }
    if (global.ADM18WeekBoot && ADM18WeekBoot.refreshUI) ADM18WeekBoot.refreshUI(sem);
  }

  async function pushAdm18Week() {
    if (!isAdm18WeekPage() || !global.IUBAdm18Reading) return { ok: false, reason: "not_adm18" };
    var sem = getSemana();
    if (!sem) return { ok: false, reason: "no_semana" };
    if (!getCc()) return { ok: false, reason: "no_cc" };
    return IUBAdm18Reading.syncCloud(sem);
  }

  async function hydrateFromCloud() {
    if (!cloudMode()) return;
    var pt = getPT();
    if (!pt || typeof pt.state !== "function") return;
    var cc = getCc();
    var sem = getSemana();
    if (!cc || !sem) return;
    var row = await GamifSDK.fetchWeekProgressFromCloud(null, sem, cc);
    if (row) {
      GamifSDK.applyCloudRowToState(pt.state(), row);
      GamifSDK.clearLocalWeekProgress(null, sem);
      if (typeof pt.render === "function") pt.render();
    }
  }

  async function pushToCloud() {
    if (!global.GamifSDK) return { ok: false, reason: "no_sdk" };
    var pt = getPT();
    if (!pt || typeof pt.state !== "function") return { ok: false, reason: "no_pt" };
    var st = pt.state();
    var cc = getCc();
    if (!cc) return { ok: false, reason: "no_cc" };
    if (!st.id_estudiante) st.id_estudiante = cc;
    if (!st.cc) st.cc = cc;
    if (!st.nombre) {
      var profile = GamifSDK.loadProfile();
      if (profile.nombre) st.nombre = profile.nombre;
    }
    if (!st.grupo && GamifSDK.loadProfile().grupo) st.grupo = GamifSDK.loadProfile().grupo;
    var sem = getSemana() || st.semana;
    if (!sem) return { ok: false, reason: "no_semana" };
    if (cloudMode()) GamifSDK.clearLocalWeekProgress(null, sem);
    try {
      var result = await GamifSDK.syncWeekProgress(st, GamifSDK.getConfig(), sem);
      if (result && result.ok && cloudMode()) GamifSDK.clearLocalWeekProgress(null, sem);
      return result;
    } catch (e) {
      console.warn("[IUB] cloud-progress:", e.message || e);
      return { ok: false, reason: e.message || "error" };
    }
  }

  var debouncedPush = debounce(function () {
    pushToCloud();
  }, 400);

  function patchPT() {
    var pt = getPT();
    if (!pt || pt.__iubCloudDirect) return false;
    pt.__iubCloudDirect = true;
    global.PT = pt;

    // ── Inject grade display into widget ────────────────────────
    function ensureGradeDisplay() {
      var container = document.getElementById("pt-grade");
      if (container) return container;
      var widget = document.getElementById("pt-widget");
      if (!widget) return null;
      var body = widget.querySelector("#pt-body, .pt-body, .pt-content");
      if (!body) body = widget;
      container = document.createElement("div");
      container.id = "pt-grade";
      container.style.cssText = "padding:.35rem .5rem;border-top:1px solid #DEDFE4;font-size:.78rem;color:#1E2843;display:flex;justify-content:space-between;align-items:center";
      container.innerHTML = '<span>📊 Nota formativa: <strong id="pt-grade-value" style="font-size:.95rem">—</strong> / 5.0</span><span style="font-size:.68rem;opacity:.6">XP <span id="pt-grade-xp">0</span>/995</span>';
      body.appendChild(container);
      return container;
    }
    function updateGradeDisplay() {
      var valEl = document.getElementById("pt-grade-value");
      var xpEl = document.getElementById("pt-grade-xp");
      if (!valEl || !xpEl) return;
      if (typeof GamifSDK !== "object") return;
      var cfg = GamifSDK.getConfig();
      var txp = GamifSDK.totalXP(cfg);
      var nota = GamifSDK.calcNotaSimple(txp, 995);
      xpEl.textContent = txp;
      valEl.textContent = nota.toFixed(2);
      valEl.style.color = nota >= 3.0 ? "#2e7d32" : nota >= 2.0 ? "#e65100" : "#c62828";
    }
    ensureGradeDisplay();
    updateGradeDisplay();
    setTimeout(updateGradeDisplay, 300);
    setTimeout(updateGradeDisplay, 1000);
    setInterval(updateGradeDisplay, 3000);

    if (typeof pt.save === "function") {
      var origSave = pt.save;
      pt.save = function () {
        if (cloudMode()) {
          if (typeof pt.render === "function") pt.render();
          debouncedPush();
        } else {
          origSave.apply(pt, arguments);
        }
      };
    }

    if (typeof pt.addXP === "function") {
      var origXp = pt.addXP;
      pt.addXP = function () {
        var out = origXp.apply(pt, arguments);
        if (cloudMode()) debouncedPush();
        return out;
      };
    }

    if (typeof pt.init === "function" && !pt.__iubInitPatched) {
      pt.__iubInitPatched = true;
      var origInit = pt.init;
      pt.init = function () {
        origInit.apply(pt, arguments);
        hydrateFromCloud();
      };
    }

    pt.sync = pt.syncCloud = async function () {
      if (typeof pt.render === "function") pt.render();
      var result = await pushToCloud();
      var msgFn = pt.msg && pt.msg.bind(pt);
      if (result.ok && msgFn) msgFn("✅ Guardado en la base de datos", "lightgreen");
      else if (result.reason === "no_cc" && msgFn) msgFn("⚠️ Configura tu cédula en el perfil", "orange");
      else if (!result.ok && msgFn) msgFn("❌ No se pudo guardar. Revisa conexión.", "salmon");
      return result;
    };

    pt.export = pt.exportCode = function () {
      if (pt.msg) pt.msg("ℹ️ El progreso se guarda automáticamente en la base de datos.", "#fff9c4");
    };
    pt.import = pt.importCode = function () {
      if (pt.msg) pt.msg("ℹ️ Ingresa tu cédula; tu progreso se carga desde la nube.", "#fff9c4");
    };

    return true;
  }

  /** Ejecuta en el mismo realm que `const PT` para exponerlo en window.PT */
  function exposePT() {
    var el = document.createElement("script");
    el.textContent = "(function(){try{if(typeof PT!=='undefined'){window.PT=PT;}}catch(e){}})();";
    (document.documentElement || document.head || document.body).appendChild(el);
    el.remove();
    return patchPT();
  }

  function exposeAndPatch() {
    exposePT();
    renderIdenticonProfile();
    hideLegacyUi();
  }

  function hideLegacyUi() {
    if (!cloudMode()) return;
    var btn = document.getElementById("pt-btn-save");
    if (btn) btn.style.display = "none";
    document.querySelectorAll(
      '[onclick*="ptExportCode"],[onclick*="ptImportCode"],[onclick*="PT.export"],[onclick*="PT.import"]'
    ).forEach(function (el) {
      el.style.display = "none";
    });
  }

  function init() {
    exposeAndPatch();
    setTimeout(function () {
      exposeAndPatch();
      hydrateFromCloud();
      hydrateAdm18Week();
    }, 600);
    setTimeout(exposeAndPatch, 1500);
    setTimeout(exposeAndPatch, 3500);
    global.addEventListener("load", function () {
      exposeAndPatch();
      hydrateFromCloud();
      hydrateAdm18Week();
    });
  }

  document.addEventListener("iub:profile-saved", function () {
    exposeAndPatch();
    hydrateFromCloud().then(pushToCloud);
    hydrateAdm18Week().then(pushAdm18Week);
    renderIdenticonProfile();
  });

  function renderIdenticonProfile() {
    if (typeof makeIdenticon !== "function") return;
    var container = document.getElementById("pt-profile");
    if (!container) {
      var widget = document.getElementById("pt-widget") || document.querySelector(".pt-widget");
      var body = widget ? widget.querySelector(".pt-body, .pt-content, [class*='body']") : null;
      if (!body && widget) body = widget;
      if (!body) return;
      container = document.createElement("div");
      container.id = "pt-profile";
      container.style.cssText = "padding:.3rem .5rem;border-top:1px solid #DEDFE4;margin-top:.3rem";
      // Insertar justo DESPUÉS de la nota formativa (#pt-grade)
      var gradeEl = document.getElementById("pt-grade");
      if (gradeEl && gradeEl.parentNode) {
        gradeEl.parentNode.insertBefore(container, gradeEl.nextSibling);
      } else {
        body.appendChild(container);
      }
    }
    var profile = {};
    try { profile = JSON.parse(localStorage.getItem(global.GAMIF_PREFIX + "_global") || "{}"); } catch(e) {}
    try { var g = GamifSDK.loadProfile(); if (g && g.cc) profile = g; } catch(e) {}
    if (!profile.cc || !profile.nombre) return;
    container.innerHTML = "";
    var el = makeIdenticon(profile.cc, profile.nombre, true);
    if (el) container.appendChild(el);
    var code = window.getIdenticonCode ? window.getIdenticonCode(profile.cc) : "";
    if (code && container) {
      var codeSpan = document.createElement("span");
      codeSpan.style.cssText = "display:inline-block;font-weight:800;font-family:monospace;background:#E9EAED;padding:.05rem .35rem;border-radius:4px;font-size:.72rem;color:#1E2843;margin-left:6px;vertical-align:middle";
      codeSpan.textContent = code;
      codeSpan.title = "Código de verificación (comparte con tu docente para confirmar tu identidad)";
      container.appendChild(codeSpan);
    }
    // Also render floating badge
    renderFloatingIdentity();
  }

  /** Crea un badge flotante + indicador en el nav sticky */
  function renderFloatingIdentity() {
    var profile = {};
    try { profile = JSON.parse(localStorage.getItem(global.GAMIF_PREFIX + "_global") || "{}"); } catch(e) {}
    try { var g = GamifSDK.loadProfile(); if (g && g.cc) profile = g; } catch(e) {}
    if (!profile.cc || !profile.nombre) return;
    if (typeof makeIdenticon !== "function") return;

    // ── 1. Nav badge (sticky top) ──────────────
    var existing = document.getElementById("iub-nav-id");
    if (existing) existing.remove();

    var nav = document.querySelector("nav.top-nav, nav") || document.getElementById("topNav");
    if (nav) {
      var navBadge = document.createElement("div");
      navBadge.id = "iub-nav-id";
      navBadge.style.cssText = "display:inline-flex;align-items:center;gap:5px;padding:2px 8px;border-radius:999px;"
        + "background:rgba(255,255,255,.12);color:#fff;font-size:.7rem;font-weight:600;"
        + "margin-left:auto;flex-shrink:0;white-space:nowrap;overflow:hidden;max-width:200px;"
        + "border:1px solid rgba(255,255,255,.2);cursor:default;user-select:none";
      navBadge.title = profile.nombre + " · CC: " + profile.cc;

      var icon = makeIdenticon(profile.cc, "", false);
      if (icon) { icon.style.cssText = "width:16px;height:16px;border-radius:50%;flex-shrink:0"; navBadge.appendChild(icon); }

      var nameSpan = document.createElement("span");
      nameSpan.textContent = profile.nombre;
      nameSpan.style.cssText = "overflow:hidden;text-overflow:ellipsis;font-size:.68rem";

      var code = window.getIdenticonCode ? window.getIdenticonCode(profile.cc) : "";
      if (code) {
        var codeSpan = document.createElement("span");
        codeSpan.textContent = code;
        codeSpan.style.cssText = "font-weight:800;font-family:monospace;background:rgba(255,255,255,.15);padding:0 4px;border-radius:3px;font-size:.62rem";
        navBadge.appendChild(codeSpan);
      }
      navBadge.appendChild(nameSpan);

      // Make nav use flex-end for the badge
      nav.style.display = "flex";
      nav.style.alignItems = "center";
      nav.appendChild(navBadge);
    }

    // ── 2. Floating badge (bottom-right, SIEMPRE visible) ──
    var floating = document.getElementById("iub-float-id");
    if (floating) floating.remove();

    var badge = document.createElement("div");
    badge.id = "iub-float-id";
    badge.style.cssText = "display:flex;align-items:center;gap:5px;padding:4px 10px;border-radius:999px;"
      + "background:rgba(30,40,67,.92);color:#fff;font-size:.72rem;font-weight:600;"
      + "white-space:nowrap;overflow:hidden;max-width:260px;"
      + "position:fixed;bottom:12px;right:12px;z-index:99999;"
      + "box-shadow:0 2px 12px rgba(0,0,0,.2);"
      + "backdrop-filter:blur(4px);border:1px solid rgba(255,255,255,.15);"
      + "cursor:pointer;user-select:none";
    badge.title = profile.nombre + " · CC: " + profile.cc;

    var icon = makeIdenticon(profile.cc, "", false);
    if (icon) { icon.style.cssText = "width:18px;height:18px;border-radius:50%;flex-shrink:0"; badge.appendChild(icon); }

    var code = window.getIdenticonCode ? window.getIdenticonCode(profile.cc) : "";
    if (code) {
      var codeSpan = document.createElement("span");
      codeSpan.textContent = code;
      codeSpan.style.cssText = "font-weight:800;font-family:monospace;background:rgba(255,255,255,.15);padding:0 5px;border-radius:4px;font-size:.68rem";
      badge.appendChild(codeSpan);
    }

    var fullName = document.createElement("span");
    fullName.textContent = profile.nombre;
    fullName.style.cssText = "overflow:hidden;text-overflow:ellipsis;font-size:.72rem";
    badge.appendChild(fullName);

    // Click → detail popup
    badge.addEventListener("click", function(e) {
      e.stopPropagation();
      var detail = document.getElementById("iub-float-detail");
      if (detail) { detail.remove(); return; }
      detail = document.createElement("div");
      detail.id = "iub-float-detail";
      detail.style.cssText = "position:fixed;bottom:54px;right:12px;z-index:99998;"
        + "background:#fff;color:#1E2843;border-radius:12px;padding:.8rem 1rem;"
        + "box-shadow:0 4px 20px rgba(0,0,0,.15);font-size:.82rem;max-width:280px;"
        + "border:1px solid #DEDFE4;line-height:1.6";
      detail.innerHTML = "<strong style='display:block;font-size:.95rem'>" + profile.nombre + "</strong>"
        + "<span style='color:#546e7a'>📄 CC: " + profile.cc + "</span><br>"
        + (profile.grupo ? "<span style='color:#546e7a'>📚 Grupo: " + profile.grupo + "</span>" : "");
      document.body.appendChild(detail);
    });

    document.addEventListener("click", function(e) {
      var detail = document.getElementById("iub-float-detail");
      if (detail && !badge.contains(e.target) && !detail.contains(e.target)) detail.remove();
    });

    document.body.appendChild(badge);
    // NO auto-hide — badge stays visible always
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  global.IUBWeekAutoSync = {
    hydrate: hydrateFromCloud,
    push: pushToCloud,
    patchPT: patchPT,
    exposePT: exposeAndPatch,
  };
})(typeof window !== "undefined" ? window : globalThis);
