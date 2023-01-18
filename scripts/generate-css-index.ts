import { resolve } from "node:path";
import * as themes from "../src/index";
import type { ColorTheme } from "../src/index";
import { names, writeCode } from "./utils";

export async function generateCSSIndex() {
  const cssVars: Record<string, string> = {};
  const _themes = themes as Record<string, ColorTheme>;

  for (const theme in _themes) {
    for (const level in _themes[theme]) {
      const value = _themes[theme][level as keyof ColorTheme];
      if (value) {
        cssVars[names(theme, level)] = value;
      }
    }
  }

  const blocks = Object.entries(_themes).map((theme) => {
    const [name, value] = theme;
    return `export const ${name} = {
${Object.entries(value).map(([level, _color]) => `  ${level}: "var(${names(name, level)})",`).join("\n")}
};`;
  });

  const codes = `// This file is generated by scripts/generate-css-index.ts

${blocks.join("\n\n")}
  `.slice(0, -2); // remove the last line

  await writeCode(resolve(process.cwd(), "./src/css/index.ts"), codes);

  return cssVars;
}
