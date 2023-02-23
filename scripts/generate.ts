import { resolve } from "path";
import { removeSync } from "fs-extra";
import { generateCSSIndex } from "./generate-css-index";
import { generateCSS } from "./generate-css";

export async function generate() {
  const cssVars = await generateCSSIndex();
  generateCSS(cssVars);
}

export function cleanup() {
  removeSync(resolve(process.cwd(), "./src/css"));
}
