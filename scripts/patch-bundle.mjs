/**
 * patch-bundle.mjs
 *
 * Post-build patch for the Vercel serverless function output.
 *
 * Problem:
 *   Nitro traces tslib into the function's node_modules but the tslib
 *   package has a `modules/package.json` with `"type":"module"` while
 *   `modules/index.js` is CommonJS. Node.js 20 ESM resolution hits this
 *   mismatch and throws ERR_MODULE_NOT_FOUND at Vercel runtime.
 *
 * Fix:
 *   Walk every *.mjs in `.vercel/output/functions/__server.func/` and replace
 *   the bare `import { ... } from "tslib"` with an inline implementation of
 *   only the tslib helpers that are actually used (__assign, __rest,
 *   __spreadArray). This removes the runtime dependency entirely.
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const FUNC_DIR = new URL(
  "../.vercel/output/functions/__server.func/",
  import.meta.url
).pathname;

// Inline implementations of the three tslib helpers used by @radix-ui packages
const TSLIB_INLINE = `
// tslib inlined by scripts/patch-bundle.mjs
var __assign = function() {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
  return t;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
`;

// Match: import { __assign, __rest, __spreadArray } from "tslib";
// (any combination of named tslib exports)
const TSLIB_IMPORT_RE = /^import\s*\{[^}]*\}\s*from\s*["']tslib["'];?\s*$/m;

let patched = 0;

function walkAndPatch(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      walkAndPatch(full);
    } else if (entry.endsWith(".mjs")) {
      const original = readFileSync(full, "utf8");
      if (TSLIB_IMPORT_RE.test(original)) {
        const patched_content = original.replace(TSLIB_IMPORT_RE, TSLIB_INLINE.trim());
        writeFileSync(full, patched_content, "utf8");
        console.log(`[patch-bundle] Patched tslib import in: ${full.replace(FUNC_DIR, "")}`);
        patched++;
      }
    }
  }
}

console.log("[patch-bundle] Scanning Vercel function output for bare tslib imports...");
walkAndPatch(FUNC_DIR);

if (patched === 0) {
  console.log("[patch-bundle] No tslib imports found — nothing to patch.");
} else {
  console.log(`[patch-bundle] Done. Patched ${patched} file(s).`);
}
