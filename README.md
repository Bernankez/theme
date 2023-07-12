# 🎨 Cole's theme preset

[![npm](https://img.shields.io/npm/v/@bernankez/theme?color=red&label=npm)](https://www.npmjs.com/package/@bernankez/theme)
[![CI](https://github.com/Bernankez/theme/workflows/CI/badge.svg)](https://github.com/Bernankez/theme/actions)
[![LICENSE](https://shields.io/github/license/Bernankez/theme)](https://github.com/Bernankez/theme/blob/master/LICENSE)

## Naming Rules (Temporary)

**&#96;themeType&#96; &#96;[dark]&#96; &#96;styleType&#96; &#96;[themeSeries]&#96;**

eg.

`colorDarkBackgroundRed`

`layoutWidth`

---

## Usage

### Use with js only

Import `@bernankez/theme` where you want to use theme color.

```js
// named import
import { colorDefault, colorPrimaryGreen } from "@bernankez/theme";
// default import
import * as theme from "@bernankez/theme";
```

### Use with CSS vars

Import `@bernankez/theme/theme.css` in `main.js`
```js
import "@bernankez/theme/theme.css";
```

CSS variables will be injected into `:root`

```css
:root {
  --color-default-dark: somecolor;
  /* ... */
}
```

You can also use in js.

```js
import { colorDefault } from "@bernankez/theme/css";

console.log(colorDefault.DEFAULT);
// var(--color-default)
```

## Color Priview

### ![colorDefault](https://img.shields.io/badge/-colorDefault-%2327272A)

- ![lighter](https://img.shields.io/badge/-lighter-%23D4D4D8)
- ![light](https://img.shields.io/badge/-light-%2371717A)
- ![DEFAULT](https://img.shields.io/badge/-DEFAULT-%2327272A)
- ![dark](https://img.shields.io/badge/-dark-%2318181B)
- ![darker](https://img.shields.io/badge/-darker-%23000000)

### ![colorDarkDefault](https://img.shields.io/badge/-colorDarkDefault-%23fffbf0)

- ![lighter](https://img.shields.io/badge/-lighter-%23ffffff)
- ![light](https://img.shields.io/badge/-light-%23fafafa)
- ![DEFAULT](https://img.shields.io/badge/-DEFAULT-%23fffbf0)
- ![dark](https://img.shields.io/badge/-dark-%23fafaf9)
- ![darker](https://img.shields.io/badge/-darker-%23fafaf9)

### ![colorDisabled](https://img.shields.io/badge/-colorDisabled-%23d4d4d4)

- ![lighter](https://img.shields.io/badge/-lighter-%23f5f5f5)
- ![light](https://img.shields.io/badge/-light-%23e5e5e5)
- ![DEFAULT](https://img.shields.io/badge/-DEFAULT-%23d4d4d4)
- ![dark](https://img.shields.io/badge/-dark-%23a3a3a3)
- ![darker](https://img.shields.io/badge/-darker-%23737373)

### ![colorBackground](https://img.shields.io/badge/-colorBackground-%23f5f5f5)

- ![lighter](https://img.shields.io/badge/-lighter-%23ffffff)
- ![light](https://img.shields.io/badge/-light-%23fafafa)
- ![DEFAULT](https://img.shields.io/badge/-DEFAULT-%23f5f5f5)
- ![dark](https://img.shields.io/badge/-dark-%23e5e5e5)
- ![darker](https://img.shields.io/badge/-darker-%23d4d4d4)

### ![colorDarkBackground](https://img.shields.io/badge/-colorDarkBackground-%2327272a)

- ![lighter](https://img.shields.io/badge/-lighter-%2352525b)
- ![light](https://img.shields.io/badge/-light-%233f3f46)
- ![DEFAULT](https://img.shields.io/badge/-DEFAULT-%2327272a)
- ![dark](https://img.shields.io/badge/-dark-%2310101b)
- ![darker](https://img.shields.io/badge/-darker-%23000000)

### ![colorPrimaryGreen](https://img.shields.io/badge/-colorPrimaryGreen-%2318a058)

- ![lighter](https://img.shields.io/badge/-lighter-%2336ad6a)
- ![light](https://img.shields.io/badge/-light-%2336ad6a)
- ![DEFAULT](https://img.shields.io/badge/-DEFAULT-%2318a058)
- ![dark](https://img.shields.io/badge/-dark-%230c7a43)
- ![darker](https://img.shields.io/badge/-darker-%230c7a43)

### WIP

### ![colorPrimaryRed](https://img.shields.io/badge/-colorPrimaryRed-%23c14344)

<!-- - ![lighter](https://img.shields.io/badge/-lighter-%2336ad6a)
- ![light](https://img.shields.io/badge/-light-%2336ad6a) -->
- ![DEFAULT](https://img.shields.io/badge/-DEFAULT-%23c14344)
<!-- - ![dark](https://img.shields.io/badge/-dark-%230c7a43)
- ![darker](https://img.shields.io/badge/-darker-%230c7a43) -->
