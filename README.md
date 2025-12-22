# theme

[![npm](https://img.shields.io/npm/v/@bernankez/theme?color=red&label=npm)](https://www.npmjs.com/package/@bernankez/theme)
[![CI](https://github.com/Bernankez/theme/workflows/CI/badge.svg)](https://github.com/Bernankez/theme/actions)
[![LICENSE](https://shields.io/github/license/Bernankez/theme)](https://github.com/Bernankez/theme/blob/master/LICENSE)

The default style of all my websites.

Click [HERE](https://theme-generator.keke.cc/?template=N4IgbgpgTgzglgewHYgFwAYA0IkEMC2EaIA1hGQHQDGVI2ALgBYSFqhUIA2CsbIARriokA5lAQBXJABM%2BnOCMb1iAYgBiAVk2a6IabiglVAJgDsZ4wEEQAX2wAzHhDGSZchUtXpc377v2GqvbB-PbottgADlBw%2BAYAnu6KyqggKlQAjAAsAMxZWf4GRqnpVBr2GrR2INGxCWpOLlKyqKDyyUG49l24hYEl3YO91TAQHDIJSZ4lEDmzs33FaQBsuKurESCj4wHxDVDO4s1TKWkZpufni51Dm0JUEEgpbR6nKhAAnJ%2Bf1yU5uP9-ncaI96PtDq4Wi8OiVLhdTL80kNupt8BJ6BAoSB2tM0vM5jlESociTSaj0ZjwU03K1sa9VKYcozGUTkcNsPweNJoCdVBANBBTBB%2BESsrgxWLNnAkI5ebCIMsHhkiRkFUqpTKEFSjjTobiVMFDfZWUbjSMJCCYDA5WcABw%2BDS2lX29COzYwC0PK3ayE2g2mk1GzYAdwMSGlIj9wQ%2BHxJJpjceqoag4aQIh9x1pOLepuN2ACS39Qeq0HEUCjrpybvzRSClbdJagZYzurpMKRAZr-Q7xeqUFw0jgEmtqXQFA0B3wthsQA) to get a live preview.

Color variables can be found in [HERE](./src/theme.json).

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
