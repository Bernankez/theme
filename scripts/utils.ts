import { existsSync, mkdir, readdirSync, rmdirSync, statSync, unlinkSync, writeFileSync } from "node:fs";

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
  const temp = filePath.split("/");
  temp.pop();
  const dir = temp.join("/");
  // console.log("exists", existsSync(dir));
  if (!existsSync(dir)) {
    const task = await new Promise<boolean>((resolve, _reject) => {
      mkdir(dir, (err) => {
        if (err) {
          console.log(err);
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
    if (!task) {
      console.error("Failed to create folder");
      return false;
    }
  }
  writeFileSync(filePath, code, { encoding: "utf-8" });
}

export function deleteFile(filePath: string) {
  if (existsSync(filePath)) {
    unlinkSync(filePath);
  }
}

export function deleteDir(dirPath: string, options?: { deleteFiles?: boolean }) {
  const { deleteFiles = true } = options || {};
  if (existsSync(dirPath) && statSync(dirPath).isDirectory()) {
    const files = readdirSync(dirPath);
    if (files.length > 0) {
      if (deleteFiles) {
        function del(path: string) {
          const files = readdirSync(path);
          for (const file of files) {
            const curPath = `${path}/${file}`;
            if (statSync(curPath).isDirectory()) {
              del(curPath);
            } else {
              deleteFile(curPath);
            }
          }
        }
        del(dirPath);
      } else {
        console.error("Failed to delete dir, dirPath is not empty");
        return false;
      }
    }
    rmdirSync(dirPath);
  } else {
    console.error("Failed to delete dir, dirPath is not a directory");
  }
}
