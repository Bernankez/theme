export interface ColorTheme {
  lighter?: string;
  light?: string;
  DEFAULT: string;
  dark?: string;
  darker?: string;
}

/**
 * The default text color
 */
export const colorDefault = {
  lighter: "#D4D4D8",
  light: "#71717A",
  DEFAULT: "#27272A",
  dark: "#18181B",
  darker: "#000000",
};

/**
 * The default text color in dark mode
 */
export const colorDarkDefault = {
  lighter: "#ffffff",
  light: "#fafafa",
  DEFAULT: "#fffbf0",
  dark: "#fafaf9",
  darker: "#fafaf9",
};

/**
 * The default disabled color
 */
export const colorDisabled = {
  lighter: "#F5F5F5",
  light: "#E5E5E5",
  DEFAULT: "#D4D4D4",
  dark: "#A3A3A3",
  darker: "#737373",
};

/**
 * The default background color, which is close to disabled color, but lighter
 */
export const colorBackground = {
  lighter: "#ffffff",
  light: "#FAFAFA",
  DEFAULT: "#F5F5F5",
  dark: "#E5E5E5",
  darker: "#D4D4D4",
};

/**
 * The default background color in dark mode
 */
export const colorDarkBackground = {
  lighter: "#52525B",
  light: "#3F3F46",
  DEFAULT: "#27272A",
  dark: "#10101B",
  darker: "#000000",
};

/**
 * The green subject color
 */
export const colorPrimaryGreen = {
  lighter: "#36ad6a",
  light: "#36ad6a",
  DEFAULT: "#18a058",
  dark: "#0c7a43",
  darker: "#0c7a43",
};

/**
 * The red subject color
 */
export const colorPrimaryRed = {
  DEFAULT: "#c14344",
};

