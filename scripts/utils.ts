import { normalize } from "node:path";
import { ensureDirSync, writeFileSync } from "fs-extra";

export function kebabCase(str: string) {
  let temp = str.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);
  if (temp.slice(0, 1) === "-") {
    temp = temp.slice(1);
  }
  return temp;
}

export function names(theme: string, level: string) {
  return `--${kebabCase(theme)}${level === "DEFAULT" ? "" : `-${kebabCase(level)}`}`;
}

export async function writeCode(filePath: string, code: string) {
  // get dirpath
  // adapt to windows
  const temp = normalize(filePath).replace(/\\/g, "/").split("/");
  temp.pop();
  const dir = temp.join("/");
  ensureDirSync(dir);
  writeFileSync(filePath, code, { encoding: "utf-8" });
}
