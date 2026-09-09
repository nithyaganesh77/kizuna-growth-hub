import { readFile, writeFile, unlink } from "node:fs/promises";
const f = "src/components/kizuna/sections/Hero.tsx";
const src = await readFile(f, "utf8");
const block = await readFile(".newblock.txt", "utf8");
const start = src.indexOf('          <div className="hidden justify-end pt-2 lg:flex">');
const endMarker = "\n        </div>\n      </div>\n    </section>";
const end = src.indexOf(endMarker);
if (start === -1 || end === -1) { console.log("MARKER NOT FOUND - no change"); process.exit(1); }
const out = src.slice(0, start) + block.replace(/\r?\n$/, "") + src.slice(end);
await writeFile(f, out, "utf8");
await unlink(".newblock.txt");
console.log("PATCHED", f);
