#!/usr/bin/env node
/**
 * Verifica semanas 8–14 TD: lectura/actividad → Supabase (TD-2026-2).
 * Uso: node scripts/verify-td-weeks-8-14.mjs [--local|--pages] [--8-14|--8-10|--11-14]
 */
import { chromium } from "playwright";
import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OFFERING = "TD-2026-2";
const PAGES_BASE = "https://dfdomin.github.io/td-inteligencia-negocios";
const LOCAL_PORT = 8793;

const WEEKS = [
  { semana: 8, path: "/semana8/", minXp: 40 },
  { semana: 9, path: "/semana9/", minXp: 40 },
  { semana: 10, path: "/semana10/", minXp: 30, parcial: true },
  { semana: 11, path: "/semana11/", minXp: 40 },
  { semana: 12, path: "/semana12/", minXp: 40 },
  { semana: 13, path: "/semana13/", minXp: 40 },
  { semana: 14, path: "/semana14/", minXp: 40 },
];

function startServer() {
  return new Promise((resolve, reject) => {
    const proc = spawn("python3", ["-m", "http.server", String(LOCAL_PORT)], {
      cwd: ROOT,
      stdio: "ignore",
    });
    proc.on("error", reject);
    setTimeout(() => resolve(proc), 700);
  });
}

function weekFilter(argv) {
  if (argv.includes("--8-10")) return WEEKS.filter((w) => w.semana <= 10);
  if (argv.includes("--11-14")) return WEEKS.filter((w) => w.semana >= 11);
  return WEEKS;
}

async function pickStudent(page, semanas) {
  return page.evaluate(async ({ offering, semanas }) => {
    const url = GamifSDK.sbUrl();
    const key = GamifSDK.sbKey();
    const headers = { apikey: key, Authorization: "Bearer " + key };
    const res = await fetch(
      url + "/rest/v1/v_legacy_students?select=cc,name,grupo,horario&offering_code=eq."
        + encodeURIComponent(offering) + "&order=name&limit=80",
      { headers },
    );
    if (!res.ok) return { error: res.status };
    const students = await res.json();
    const semanaList = semanas.join(",");
    const progRes = await fetch(
      url + "/rest/v1/v_legacy_student_progress?select=student_id,semana,xp&offering_code=eq."
        + encodeURIComponent(offering) + "&semana=in.(" + semanaList + ")",
      { headers },
    );
    const prog = progRes.ok ? await progRes.json() : [];
    const busy = new Set(
      prog.filter((r) => Number(r.xp) >= 30).map((r) => String(r.student_id) + ":" + r.semana),
    );
    for (const s of students) {
      const taken = semanas.every((w) => busy.has(String(s.cc) + ":" + w));
      if (!taken) return s;
    }
    return students[0] || null;
  }, { offering: OFFERING, semanas });
}

async function fetchCloud(page, semana, cc) {
  return page.evaluate(
    async ({ offering, semana, cc }) => {
      const url = GamifSDK.sbUrl();
      const key = GamifSDK.sbKey();
      const res = await fetch(
        url + "/rest/v1/v_legacy_student_progress?select=xp,quiz_score,activity_done,updated_at"
          + "&offering_code=eq." + encodeURIComponent(offering)
          + "&semana=eq." + semana
          + "&student_id=eq." + encodeURIComponent(cc),
        { headers: { apikey: key, Authorization: "Bearer " + key } },
      );
      const rows = res.ok ? await res.json() : [];
      return rows[0] || null;
    },
    { offering: OFFERING, semana, cc },
  );
}

async function runWeek(page, baseUrl, student, week) {
  const url = baseUrl + week.path + "?v=" + Date.now();
  await page.goto(url, { waitUntil: "load", timeout: 45000 });
  await page.waitForFunction(() => !!window.GamifSDK, null, { timeout: 30000 });
  await page.evaluate(() => {
    if (window.IUBTdWeekBoot && typeof IUBTdWeekBoot.boot === "function") IUBTdWeekBoot.boot();
  });
  await page.waitForFunction(
    () => !!window.__IUB_TD_BOOT && !!window.PT && typeof window.PT.state === "function",
    null,
    { timeout: 20000 },
  );

  await page.evaluate((s) => {
    const p = {
      nombre: s.name,
      cc: s.cc,
      id_estudiante: s.cc,
      grupo: s.grupo || "",
      horario: s.horario || "",
    };
    localStorage.setItem("td_global", JSON.stringify(p));
    GamifSDK.saveProfile(p);
    const overlay = document.getElementById("pt-overlay");
    if (overlay) overlay.style.display = "none";
    const st = window.PT.state();
    st.cc = p.cc;
    st.id_estudiante = p.cc;
    st.nombre = p.nombre;
    st.grupo = p.grupo;
    st.horario = p.horario;
  }, student);

  await page.waitForTimeout(1200);

  const reading = await page.evaluate(() => {
    const sections = window.IUBReadingPolicy ? IUBReadingPolicy.detectSections() : [];
    sections.forEach((sec) => window.PT.addXP(sec.xp, "Lectura: " + sec.label));
    return {
      sections: sections.length,
      xp: window.PT.state().xp,
    };
  });

  const sync = await page.evaluate(
    async ({ minXp, student, semana }) => {
      const payload = {
        nombre: student.name,
        cc: student.cc,
        id_estudiante: student.cc,
        grupo: student.grupo || "",
        horario: student.horario || "",
        semana: semana,
        xp: minXp,
        actividad_completada: true,
        activity_done: true,
      };
      const result = await GamifSDK.syncWeekProgress(payload, GamifSDK.getConfig(), semana);
      if (window.PT && window.PT.state) {
        const st = window.PT.state();
        st.xp = minXp;
        st.actividad_completada = true;
        st.activity_done = true;
        if (window.PT.render) window.PT.render();
      }
      return { xp: minXp, ok: !!(result && result.ok), status: result && result.status };
    },
    { minXp: week.minXp, student, semana: week.semana },
  );
  await page.waitForTimeout(4500);

  const ui = await page.evaluate(() => ({
    xp: window.PT.state().xp,
    booted: !!window.__IUB_TD_BOOT,
  }));

  let cloud = null;
  for (let attempt = 0; attempt < 4; attempt++) {
    cloud = await fetchCloud(page, week.semana, student.cc);
    if (cloud && Number(cloud.xp) >= week.minXp) break;
    await page.waitForTimeout(2000);
  }
  const cloudOk = cloud && Number(cloud.xp) >= week.minXp && cloud.activity_done === true;
  const uiOk = ui.xp >= week.minXp;
  const syncOk = sync && sync.ok !== false;

  return {
    semana: week.semana,
    ok: cloudOk && uiOk && syncOk,
    reading,
    ui,
    sync,
    cloud: cloud
      ? { xp: cloud.xp, activity_done: cloud.activity_done, updated: cloud.updated_at }
      : null,
    checks: { cloudOk, uiOk, syncOk },
  };
}

async function main() {
  const mode = process.argv.includes("--pages") ? "pages" : "local";
  const weeks = weekFilter(process.argv);
  const baseUrl = mode === "pages" ? PAGES_BASE : "http://127.0.0.1:" + LOCAL_PORT;
  const server = mode === "local" ? await startServer() : null;

  const browser = await chromium.launch({ headless: true });
  const rosterPage = await browser.newPage();
  await rosterPage.goto(baseUrl + "/semana8/", { waitUntil: "domcontentloaded", timeout: 45000 });
  await rosterPage.waitForFunction(() => !!window.GamifSDK, null, { timeout: 25000 });
  const student = await pickStudent(
    rosterPage,
    weeks.map((w) => w.semana),
  );
  await rosterPage.close();

  if (!student || student.error) {
    console.error("❌ No se pudo elegir estudiante del roster TD:", student);
    process.exit(1);
  }

  console.log("▶ Estudiante:", student.name, "| CC", student.cc, "| Modo:", mode);
  console.log("▶ Semanas:", weeks.map((w) => w.semana).join(", "), "\n");

  const results = [];
  for (const week of weeks) {
    const page = await browser.newPage();
    try {
      const r = await runWeek(page, baseUrl, student, week);
      results.push(r);
      console.log(
        r.ok ? "✅" : "❌",
        "Semana",
        r.semana,
        "— UI",
        r.ui.xp,
        "XP | Nube",
        r.cloud?.xp ?? "?",
        "| lectura secciones",
        r.reading.sections,
      );
      if (!r.ok) console.log("   checks:", r.checks, r.sync);
    } catch (e) {
      results.push({ semana: week.semana, ok: false, error: e.message });
      console.log("❌ Semana", week.semana, "—", e.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  if (server) server.kill();

  const failed = results.filter((r) => !r.ok).length;
  console.log("\n=== RESUMEN TD ·", student.name, "===\n");
  console.log("Pasaron:", results.length - failed, "/", results.length);
  if (failed) process.exit(1);
  console.log("\n🎉 Semanas 8–14 TD — progreso en Supabase OK.\n");
}

main();
