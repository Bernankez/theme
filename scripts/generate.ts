import { resolve } from "node:path";
import process from "node:process";
import { removeSync } from "fs-extra";
import { presetNone, presetShadcn } from "../src";
import { writeCode } from "./utils";

export function generate() {
  console.log("[scripts] Generating CSS files...");
  const none = generateCSS(presetNone.style);
  const nonePath = resolve(process.cwd(), "./src/css/none/index.css");
  const shadcn = generateCSS(presetShadcn.style);
  const shadcnPath = resolve(process.cwd(), "./src/css/shadcn/index.css");

  writeCode(nonePath, none);
  writeCode(shadcnPath, shadcn);
  console.log("[scripts] CSS files generated.");

  return () => {
    removeSync(nonePath);
    removeSync(shadcnPath);
    console.log("[scripts] CSS files removed.");
  };
}

function generateCSS(style: {
  light: Record<string, string>;
  dark: Record<string, string>;
}) {
  return `:root {
${Object.entries((style.light)).map(([key, value]) => {
    return `  ${key}: ${value};`;
  }).join("\n")}
}

:root .dark {
${Object.entries((style.dark)).map(([key, value]) => {
  return `  ${key}: ${value};`;
}).join("\n")}
}`;
}
