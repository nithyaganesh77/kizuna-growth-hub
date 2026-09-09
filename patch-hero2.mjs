import { readFile, writeFile } from "node:fs/promises";
const f = "src/components/kizuna/sections/Hero.tsx";
let s = await readFile(f, "utf8");

const oldOverlay = `        <div className="absolute inset-0 bg-[linear-gradient(102deg,color-mix(in_oklab,var(--ivory)_94%,transparent)_0%,color-mix(in_oklab,var(--ivory)_80%,transparent)_24%,color-mix(in_oklab,var(--ivory)_34%,transparent)_44%,transparent_64%)]" />
        <div className="absolute inset-x-0 top-0 h-44 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--ivory)_70%,transparent)_0%,transparent_100%)]" />`;
const newOverlay = `        <div className="pointer-events-none absolute top-[14%] -left-[6%] h-[62%] w-[58%] rounded-[50%] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--ivory)_88%,transparent)_0%,color-mix(in_oklab,var(--ivory)_62%,transparent)_45%,transparent_72%)] blur-[26px]" />`;
if (!s.includes(oldOverlay)) { console.log("OVERLAY MARKER NOT FOUND"); process.exit(1); }
s = s.replace(oldOverlay, newOverlay);

const oldPanel = `className="animate-rise relative max-w-[300px] rotate-[-5deg] rounded-3xl bg-ivory/72 px-6 py-5 backdrop-blur-[3px]"`;
const newPanel = `className="animate-rise relative max-w-[300px] rotate-[-5deg] px-2"`;
if (!s.includes(oldPanel)) { console.log("PANEL MARKER NOT FOUND"); process.exit(1); }
s = s.replace(oldPanel, newPanel);

const oldP = `<p className="text-center font-display text-[1.9rem] leading-[1.3] font-semibold text-navy italic">`;
const newP = `<p
                className="text-center font-display text-[1.9rem] leading-[1.3] font-semibold text-navy italic"
                style={{ textShadow: "0 1px 14px rgba(255,253,247,0.95), 0 1px 3px rgba(255,253,247,0.9)" }}
              >`;
if (!s.includes(oldP)) { console.log("TAGLINE MARKER NOT FOUND"); process.exit(1); }
s = s.replace(oldP, newP);

await writeFile(f, s, "utf8");
console.log("PATCHED", f);
