// ══════════════════════════════════════════════════════════════
//  TD · Mercado360 — Configuración Supabase (gamificación unificada)
//  Mismo proyecto Supabase compartido entre módulos IUB.
// ══════════════════════════════════════════════════════════════

(function () {
  var SUPABASE_URL = "https://nnrgxuzvjtweyzkdrech.supabase.co";
  var SUPABASE_KEY = "sb_publishable_-101J7EEEhv-C5kjosWGTg_657OtsBg";

  var MODULE_CODE   = "TD";
  var OFFERING_CODE = "TD-2026-2";
  var NARRATIVE     = "Mercado360";
  var COURSE_CODE   = OFFERING_CODE;

  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.warn("[TD] supabase-config.js: credenciales no configuradas.");
    return;
  }

  localStorage.setItem("td_supabase_url", SUPABASE_URL);
  localStorage.setItem("td_supabase_key", SUPABASE_KEY);
  localStorage.setItem("gamif_module_code", MODULE_CODE);
  localStorage.setItem("gamif_offering_code", OFFERING_CODE);
  localStorage.setItem("gamif_narrative", NARRATIVE);
  localStorage.setItem("td_course_code", COURSE_CODE);

  window.MODULE_CODE = MODULE_CODE;
  window.OFFERING_CODE = OFFERING_CODE;
  window.NARRATIVE = NARRATIVE;
  window.SUPABASE_URL = SUPABASE_URL;
  window.SUPABASE_KEY = SUPABASE_KEY;
  window.GAMIF_PREFIX = "td";

  window.IUB_DASHBOARD = {
    title: "TD",
    subtitle: NARRATIVE,
    totalWeeks: 14,
    xpMaxPerWeek: 50,
    hoursPerSession: 4,
    sessionsForAttendance: 13,
    maxAbsencePct: 0.2,
    formativeWeightPct: 40,
    evaluationWeightPct: 60,
    availableWeeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    weekUrl: function (n) {
      return "../semana" + n + "/index.html";
    },
  };

  console.info("[TD] Supabase gamificación ✅ →", SUPABASE_URL, "|", OFFERING_CODE);
})();
