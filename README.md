# theme

[![npm](https://img.shields.io/npm/v/@bernankez/theme?color=red&label=npm)](https://www.npmjs.com/package/@bernankez/theme)
[![CI](https://github.com/Bernankez/theme/workflows/CI/badge.svg)](https://github.com/Bernankez/theme/actions)
[![LICENSE](https://shields.io/github/license/Bernankez/theme)](https://github.com/Bernankez/theme/blob/master/LICENSE)

The default style of all my websites.

Click [HERE](https://theme-generator.keke.cc/?template=N4IgbgpgTgzglgewHYgFwAYA0IkEMC2EaIA1hGQHQDGVI2ALgBYSFqhUIA2CsbIARriokA5lAQBXJABM%2BnOCMb1iAYgBiAVk2a6IabiglVAJgDsZ4wEEQAX2wAzHhDGSZchUtXpc377v2GqvbB-PbottgADlBw%2BAYAnu6KyqggKlQAjAAsAMxZWf4GRqkq-KZZ6FkZESDRsQlqTi5Ssqig8slBuPbduIWBJT1DfXYgMBAcMglJniUQOfPz-cVpOWvrNeOTAfGNUM7iLTMpaRmmZ2fLXcM1QlQQSCntHicqiws5VyXrG6N3D-Q9gdXK1np0ShdzqYvmlhj0avgJPQIKCQB1Zml3ktsAEViofmsEUiUUDmm42miXqpTDkaTSYSo4SNsPweNJoMdVBANBBTBB%2BAysrghUKanAkI5ORCIAA2e7VHFFVQZWXysUShCkw7ksEYxnBA0Mg2G0YwCQ0CAwGBS04ADh8GltDIy9vQjs25vuVq1IJt%2BuNRuN9hqAHcDEhxSI-cEAJwxwmKgaw%2BxxwmjMNQCNIEQ%2Bo4U9GvIPBxN4os1aDiKDRt05d0loI192jCs8XM6yng5MB%2BuDIO2UZQXDSOASa2pdAUDT7fD9oA) to get a live preview.

Color variables can be found in [HERE](https://github.com/Bernankez/theme/blob/master/src/theme.json).

## Install

```sh
pnpm i @bernankez/theme
```

## Usage

### Default usage

```ts
// main.ts
import "@bernankez/theme/css/none/index.css";
```

With UnoCSS

```ts
// uno.config.ts
import { presetNone } from "@bernankez/theme";
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno()],
  theme: {
    ...presetNone.unocss,
  },
});
```

Or with TailwindCSS

```js
// tailwind.config.js
import { presetNone } from "@bernankez/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    ...presetNone.tailwind,
  },
  plugins: [],
};
```

```html
<div class="text-primary-foreground bg-primary">
  Hello world!
</div>
```

```css
.usage-in-css {
  color: rgb(var(--primary-foreground));
  background-color: rgb(var(--primary));
}
```

### Using with Shadcn

```ts
// main.ts
import "@bernankez/theme/css/shadcn/index.css";
```

```js
// tailwind.config.js
import { presetShadcn } from "@bernankez/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    ...presetShadcn.tailwind,
  },
  plugins: [],
};
```

```html
<div class="text-primary-foreground bg-primary">
  Hello world!
</div>
```

```css
.usage-in-css {
  color: hsl(var(--primary-foreground));
  background-color: hsl(var(--primary));
}
```
