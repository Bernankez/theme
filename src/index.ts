import { presetNone as _presetNone, presetShadcn as _presetShadcn, defaultColors, defineTheme } from "@bernankez/theme-generator";
import themeJson from "./theme.json";

const _theme = defineTheme({
  defaults: defaultColors,
  overrides: themeJson.theme,
});

export const presetNone = _presetNone(_theme);

export const presetShadcn = _presetShadcn(_theme);
