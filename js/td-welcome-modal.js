/**
 * td-welcome-modal.js — Modal de identificación para TD semanas
 * Busca la cc en v_legacy_students, autoverifica si ya está guardada.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "td_global";
  var PREFIX = "td";

  function shouldShowModal() {
    try {
      var g = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      return !g.cc || String(g.cc).trim().length < 3;
    } catch(e) { return true; }
  }

  function showStep(name) {
    ["pt-step1","pt-step2a","pt-step2b"].forEach(function(id){
      var el = document.getElementById(id);
      if (el) el.style.display = (id === name) ? "block" : "none";
    });
  }
  window.showStep = showStep;

  function showModal() {
    var overlay = document.getElementById("pt-overlay");
    if (overlay) overlay.style.display = "flex";
    showStep("pt-step1");
    try {
      var g = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      if (g.cc) {
        var ccInp = document.getElementById("pt-modal-cc");
        if (ccInp) ccInp.value = g.cc;
      }
    } catch(e) {}
    var inp = document.getElementById("pt-modal-cc");
    if (inp) setTimeout(function(){ inp.focus(); }, 100);
  }

  function closeModal() {
    var overlay = document.getElementById("pt-overlay");
    if (overlay) {
      overlay.style.opacity = "0";
      overlay.style.transition = "opacity .2s";
      setTimeout(function(){ overlay.style.display = "none"; overlay.style.opacity = ""; }, 200);
    }
  }

  function getStudentsList() {
    try { return JSON.parse(localStorage.getItem(PREFIX + "_students_v1") || "[]"); } catch(e) { return []; }
  }

  function esc(s) {
    return String(s ?? "").replace(/[&<>"']/g, function(m) {
      return {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"}[m];
    });
  }

  function saveProfile(cc, nombre, grupo, horario) {
    var profile = {};
    try { profile = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); } catch(e) {}
    profile.cc = cc;
    profile.nombre = nombre;
    profile.grupo = grupo || profile.grupo || "";
    profile.horario = horario || profile.horario || "";
    profile.id_estudiante = cc;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    if (typeof GamifSDK !== "undefined" && GamifSDK.saveProfile) {
      GamifSDK.saveProfile(profile);
    }
    // Notify PT to update
    if (typeof PT !== "undefined") {
      if (PT.state) {
        var st = PT.state();
        st.cc = cc;
        st.id_estudiante = cc;
        st.nombre = nombre;
      }
      if (PT.save) PT.save();
      if (PT.sync) setTimeout(function(){ PT.sync(); }, 500);
    }
    closeModal();
    // Remove the identify banner if present
    var banner = document.getElementById("td-week-sync-banner");
    if (banner) banner.remove();
  }

  window.ptSearchCC = function() {
    var ccInp = document.getElementById("pt-modal-cc");
    var errEl = document.getElementById("pt-modal-error");
    var cc = ccInp ? ccInp.value.trim().replace(/\D/g,'') : "";
    if (!cc || cc.length < 5) {
      if (errEl) errEl.textContent = "Ingresa tu n\u00famero de c\u00e9dula (m\u00ednimo 5 d\u00edgitos).";
      if (ccInp) ccInp.focus();
      return;
    }
    if (errEl) errEl.textContent = "";

    // 1. Buscar en localStorage
    var students = getStudentsList();
    var found = students.find(function(s){ return String(s.cc) === cc; });
    if (found) {
      var nameEl = document.getElementById("pt-fc-name");
      var metaEl = document.getElementById("pt-fc-meta");
      if (nameEl) nameEl.textContent = "\u2705 " + found.name;
      if (metaEl) metaEl.innerHTML =
        (found.grupo ? "\ud83d\udcda Grupo: <strong>" + esc(found.grupo) + "</strong>" : "") +
        (found.horario ? " \u00a0\u00b7\u00a0 \u23f0 " + esc(found.horario) : "");
      nameEl.dataset.cc = cc;
      nameEl.dataset.nombre = found.name;
      nameEl.dataset.grupo = found.grupo || "";
      nameEl.dataset.horario = found.horario || "";
      window.showStep("pt-step2a");
      var btn = document.getElementById("pt-modal-btn");
      if (btn) setTimeout(function(){ btn.focus(); }, 100);
      return;
    }

    // 2. Buscar en Supabase unificado
    var sUrl = localStorage.getItem(PREFIX + "_supabase_url");
    var sKey = localStorage.getItem(PREFIX + "_supabase_key");
    var offering = window.OFFERING_CODE || "TD-2026-2";
    if (sUrl && sKey) {
      if (errEl) errEl.textContent = "\u23f3 Buscando\u2026";
      fetch(sUrl + "/rest/v1/v_legacy_students?cc=eq." + encodeURIComponent(cc)
          + "&offering_code=eq." + encodeURIComponent(offering) + "&limit=1", {
        headers: { "apikey": sKey, "Authorization": "Bearer " + sKey }
      }).then(function(r){ return r.json(); })
        .then(function(rows){
          if (errEl) errEl.textContent = "";
          if (rows && rows.length) {
            var r = rows[0];
            var nameEl = document.getElementById("pt-fc-name");
            var metaEl = document.getElementById("pt-fc-meta");
            if (nameEl) nameEl.textContent = "\u2705 " + r.name;
            if (metaEl) metaEl.innerHTML =
              (r.grupo ? "\ud83d\udcda Grupo: <strong>" + esc(r.grupo) + "</strong>" : "") +
              (r.horario ? " \u00a0\u00b7\u00a0 \u23f0 " + esc(r.horario) : "");
            nameEl.dataset.cc = cc;
            nameEl.dataset.nombre = r.name;
            nameEl.dataset.grupo = r.grupo || "";
            nameEl.dataset.horario = r.horario || "";
            window.showStep("pt-step2a");
          } else {
            var nombreInp = document.getElementById("pt-modal-nombre");
            if (nombreInp) nombreInp.dataset.cc = cc;
            window.showStep("pt-step2b");
            if (nombreInp) setTimeout(function(){ nombreInp.focus(); }, 100);
          }
        }).catch(function(){
          if (errEl) errEl.textContent = "";
          var nombreInp = document.getElementById("pt-modal-nombre");
          if (nombreInp) nombreInp.dataset.cc = cc;
          window.showStep("pt-step2b");
          if (nombreInp) setTimeout(function(){ nombreInp.focus(); }, 100);
        });
      return;
    }

    // 3. Manual
    var nombreInp = document.getElementById("pt-modal-nombre");
    if (nombreInp) nombreInp.dataset.cc = cc;
    window.showStep("pt-step2b");
    if (nombreInp) setTimeout(function(){ nombreInp.focus(); }, 100);
  };

  window.ptConfirmFound = function() {
    var nameEl = document.getElementById("pt-fc-name");
    var cc = nameEl ? nameEl.dataset.cc : "";
    var nombre = nameEl ? nameEl.dataset.nombre : "";
    var grupo = nameEl ? nameEl.dataset.grupo : "";
    var horario = nameEl ? nameEl.dataset.horario : "";
    if (!cc || !nombre) {
      var e2 = document.getElementById("pt-modal-error2");
      if (e2) e2.textContent = "Error al leer los datos. Intenta de nuevo.";
      return;
    }
    saveProfile(cc, nombre, grupo, horario);
  };

  window.ptModalSetupManual = function() {
    var nombreInp = document.getElementById("pt-modal-nombre");
    var grupoInp = document.getElementById("pt-modal-grupo");
    var ccInp = document.getElementById("pt-modal-cc");
    var errEl = document.getElementById("pt-modal-error3");
    var nombre = nombreInp ? nombreInp.value.trim() : "";
    var grupo = grupoInp ? grupoInp.value.trim() : "";
    var cc = ccInp ? ccInp.value.trim().replace(/\D/g,'') : "";
    if (!nombre || nombre.length < 3) {
      if (errEl) errEl.textContent = "Por favor escribe tu nombre completo (m\u00ednimo 3 caracteres).";
      if (nombreInp) nombreInp.focus();
      return;
    }
    if (!cc) cc = "MANUAL_" + Date.now();
    saveProfile(cc, nombre, grupo, "");
  };

  window.ptBackToCC = function() {
    window.showStep("pt-step1");
    var inp = document.getElementById("pt-modal-cc");
    if (inp) setTimeout(function(){ inp.focus(); }, 100);
  };

  // ── Auto-verify on page load ──
  function bootModal() {
    // If there's a stored cc, verify it against Supabase
    try {
      var g = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      if (g && g.cc && String(g.cc).trim().length >= 5) {
        var sUrl = localStorage.getItem(PREFIX + "_supabase_url");
        var sKey = localStorage.getItem(PREFIX + "_supabase_key");
        var offering = window.OFFERING_CODE || "TD-2026-2";
        if (sUrl && sKey) {
          fetch(sUrl + "/rest/v1/v_legacy_students?cc=eq." + encodeURIComponent(g.cc)
              + "&offering_code=eq." + encodeURIComponent(offering) + "&limit=1", {
            headers: { "apikey": sKey, "Authorization": "Bearer " + sKey }
          }).then(function(r){ return r.json(); })
            .then(function(rows){
              if (rows && rows.length) {
                var overlay = document.getElementById("pt-overlay");
                if (overlay) overlay.style.display = "none";
              } else {
                if (shouldShowModal()) showModal();
              }
            }).catch(function(){
              if (shouldShowModal()) showModal();
            });
          return;
        }
      }
    } catch(e) {}
    if (shouldShowModal()) showModal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootModal);
  } else {
    bootModal();
  }
})();
