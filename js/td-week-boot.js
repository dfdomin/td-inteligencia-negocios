/**
 * TD · Inicializa PT unificado (GamifSDK.createPT) en todas las semanas.
 * Reemplaza widgets locales que solo guardaban en localStorage.
 */
(function (global) {
  "use strict";

  function parseSemana() {
    var m = (global.location && global.location.pathname || "").match(/semana(\d+)/i);
    return m ? parseInt(m[1], 10) : 1;
  }

  function loadTdGlobal() {
    try {
      return JSON.parse(localStorage.getItem("td_global") || "{}");
    } catch (e) {
      return {};
    }
  }

  function getProfile() {
    if (global.GamifSDK) {
      return Object.assign({}, loadTdGlobal(), GamifSDK.loadProfile() || {});
    }
    return loadTdGlobal();
  }

  function applyProfile(state) {
    var p = getProfile();
    if (p.cc || p.id_estudiante) {
      state.cc = String(p.cc || p.id_estudiante);
      state.id_estudiante = state.cc;
    }
    if (p.nombre || p.name) state.nombre = p.nombre || p.name;
    if (p.grupo) state.grupo = p.grupo;
    if (p.horario) state.horario = p.horario;
  }

  function ensureIdentifyBanner() {
    var p = getProfile();
    if (p.cc || p.id_estudiante) return;
    var id = "td-week-sync-banner";
    if (document.getElementById(id)) return;
    var bar = document.createElement("div");
    bar.id = id;
    bar.style.cssText =
      "position:fixed;top:0;left:0;right:0;z-index:60;background:#fff3cd;color:#5d4037;" +
      "padding:.55rem 1rem;text-align:center;font-size:.88rem;border-bottom:1px solid #ffe082;";
    bar.innerHTML =
      "⚠️ Identifica tu cédula para guardar tu progreso en la nube. " +
      '<button type="button" id="td-week-identify-btn" style="margin-left:.5rem;font-weight:800;' +
      'border:1px solid #5d4037;background:#ffdf2d;border-radius:8px;padding:.2rem .65rem;cursor:pointer;">Identificarme</button>';
    document.body.appendChild(bar);
    document.getElementById("td-week-identify-btn").addEventListener("click", function () {
      var cc = prompt("Tu número de cédula:");
      if (!cc || !cc.trim()) return;
      var nombre = prompt("Tu nombre completo:") || "";
      var grupo = prompt("Grupo (opcional):") || "";
      var horario = prompt("Horario (opcional):") || "";
      var next = {
        cc: cc.trim(),
        id_estudiante: cc.trim(),
        nombre: nombre.trim(),
        grupo: grupo.trim(),
        horario: horario.trim(),
      };
      localStorage.setItem("td_global", JSON.stringify(next));
      if (global.GamifSDK) GamifSDK.saveProfile(next);
      if (global.PT && PT.state) applyProfile(PT.state());
      if (global.PT && PT.save) PT.save();
      bar.remove();
    });
  }

  function wireGlobals() {
    global.ptSyncCloud = function () {
      if (global.PT && PT.sync) PT.sync();
    };
    global.ptToggle = function () {
      if (global.PT && PT.toggle) PT.toggle();
    };
    global.ptExportCode = function () {
      if (global.PT && PT.exportCode) PT.exportCode();
    };
    global.ptImportCode = function () {
      if (global.PT && PT.importCode) PT.importCode();
    };
  }

  function boot() {
    if (!global.GamifSDK || typeof GamifSDK.createPT !== "function") return;

    var semana = parseSemana();
    var xpMax = semana === 5 ? 40 : 50;

    var pt = GamifSDK.createPT({
      semana: semana,
      xpMax: xpMax,
      autoVisitXp: false,
      onInit: function (state) {
        applyProfile(state);
      },
    });
    pt.__tdBooted = true;
    global.PT = pt;
    global.__IUB_TD_BOOT = true;
    applyProfile(global.PT.state());

    wireGlobals();
    ensureIdentifyBanner();

    if (global.IUBWeekAutoSync && typeof IUBWeekAutoSync.patchPT === "function") {
      IUBWeekAutoSync.patchPT();
    }

    if (typeof global.PT.init === "function") global.PT.init();
  }

  function scheduleBoot() {
    if (document.readyState === "complete") {
      boot();
      return;
    }
    global.addEventListener("load", function onLoad() {
      global.removeEventListener("load", onLoad);
      boot();
    });
    if (document.readyState === "interactive") {
      setTimeout(boot, 0);
    }
  }

  scheduleBoot();

  global.IUBTdWeekBoot = { boot: boot, parseSemana: parseSemana };
})(typeof window !== "undefined" ? window : globalThis);
