import { resolve } from "path";
import { generateCSSIndex } from "./generate-css-index";
import { generateCSS } from "./generate-css";
import { deleteDir } from "./utils";

export async function generate() {
  const cssVars = await generateCSSIndex();
  generateCSS(cssVars);
}

export function cleanup() {
  deleteDir(resolve(process.cwd(), "./src/css"));
}
