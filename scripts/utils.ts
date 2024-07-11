import { normalize } from "pathe";
import { ensureDirSync, writeFileSync } from "fs-extra";

export async function writeCode(filePath: string, code: string) {
  // get dirpath
  // adapt to windows
  const temp = normalize(filePath).replace(/\\/g, "/").split("/");
  temp.pop();
  const dir = temp.join("/");
  ensureDirSync(dir);
  writeFileSync(filePath, code, { encoding: "utf-8" });
}
