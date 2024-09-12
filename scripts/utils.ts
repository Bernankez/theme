import { ensureDirSync, writeFileSync } from "fs-extra";
import { normalize } from "pathe";

export async function writeCode(filePath: string, code: string) {
  // get dirpath
  // adapt to windows
  const temp = normalize(filePath).replace(/\\/g, "/").split("/");
  temp.pop();
  const dir = temp.join("/");
  ensureDirSync(dir);
  writeFileSync(filePath, code, { encoding: "utf-8" });
}
