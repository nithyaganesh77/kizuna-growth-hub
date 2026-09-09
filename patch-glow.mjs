import { readFile, writeFile } from "node:fs/promises";
const f = "src/components/kizuna/sections/Hero.tsx";
let s = await readFile(f, "utf8");
const a = `className="pointer-events-none absolute -inset-x-16 -inset-y-12 -z-10 rounded-[50%] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--ivory)_86%,transparent)_0%,color-mix(in_oklab,var(--ivory)_74%,transparent)_42%,color-mix(in_oklab,var(--ivory)_38%,transparent)_68%,transparent_88%)] blur-[38px]"`;
const b = `className="pointer-events-none absolute -inset-x-4 -inset-y-3 -z-10 rounded-[50%] bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--ivory)_72%,transparent)_0%,color-mix(in_oklab,var(--ivory)_48%,transparent)_38%,color-mix(in_oklab,var(--ivory)_18%,transparent)_62%,transparent_80%)] blur-[28px]"`;
if (!s.includes(a)) { console.log("MARKER NOT FOUND"); process.exit(1); }
await writeFile(f, s.replace(a, b), "utf8");
console.log("PATCHED", f);
