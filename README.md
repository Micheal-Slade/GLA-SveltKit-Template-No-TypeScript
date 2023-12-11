---
Title: The project name....
Public: true or false
URL: the URL
Framework: Svelte
Mapping: for most projects this is maplibre
---


# ldn-viz svelte starter template

This starter template can be used to quickly scaffold a [`svelte kit`](https://kit.svelte.dev/) project that uses components from ['ldn-viz-tools](https://github.com/Greater-London-Authority/ldn-viz-tools).

### Notes

- _This starter and the ldn-viz-tools packages are in active development._
- _Please open a pull request for any updates to this template._

### Features

- The template stays pretty close to the default create-svelte setup with:
  - Typescript using typescript syntax,
  - ESLint for code linting
  - Prettier for code formatting
  - Playwright for browser testing
  - Vitest for unit testing
- Tailwindcss is setup
- Components are imported from ldn-viz-tools
- Example Jenkins file and Static build

## Developing

Once you've created a project by clicking 'use this template' and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, a static [adapter](https://kit.svelte.dev/docs/adapters) and jenkins file have been included for our standard target environment.

The !!INSERT YOUR APP NAME HERE!! variable in svelte.config and Jenkinsfile should be updated for your app.
