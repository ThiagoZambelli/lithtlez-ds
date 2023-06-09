<div align="center">

![Alt text](src/assets/logoLithtleZ.svg)

&nbsp;

---

&nbsp;

</div>


<img align="left" width="40%" style="margin-top:-20px" src="./src/assets/eu.png">

</br>
</br>

<div dsplay="inline-block">

<h1 align="justify">Design System LithtleZ</h1>
<h2 align="justify">Feito por : Thiago Zambelli</h2>
<h3 align="justify">Projeto focado em ser o DS dos projetos criados pela LithtleZ</h3>
 
  <a href="https://www.linkedin.com/in/thiagozambelli">
    <img width="80px" src="https://i.ibb.co/RyZx12b/linkedin.png" alt="linkedin" style="vertical-align:top;">
  </a>

</div>

- [Projeto](#projeto)
- [Componentes](#componentes)
- [Problemas e Soluções](#problemas__solucoes)
- [README do TSDX](#tsdx)

&nbsp;

---

# Projeto -> <div id='projeto'></div>
> O projeto foi criado para servir de DS (design system) de todas as criações LithtleZ, deizando uniforme e padronizado todos os desenvolvimentos.

## TSDX :
> Para criação do projeto foi utilizado o TSDX, que consiste em uma ferramenta que gera e configura o ambinte para uma biblioteca em TS. [Aqui o link para o site do TSDX](https://tsdx.io/)

## StoryBook :
> O Storybook é um workshop de front-end, sua função é ser uma ferramenta para desenvolver componentes, documentação e testes isoladamente.

## Comando de postagem no NPM:
> Para postar o projeto e atualizar no NPM foi utilizado o comando `npm publish --access=public` (Sempre lembrando de mudar a versão)

---

<h1 align='center' id='componentes'>> Componentes <<h1>

---
<h2 align='center'>-> LzBotao<h2>
&nbsp;

![Alt text](<src/assets/img/botao normal.png>)
![Alt text](<src/assets/img/botao gota.png>)
![Alt text](<src/assets/img/botao mdificado.png>)

Chave|Valores| Valores
----|--------|--------
texto :| "O que vai dentro do botao"|
forma :| 'default' | 'gota'
tipo :| 'principal' | 'secundario'
corPrimaria :| "Cor principal" |
corSecundaria :| "Cor secundaria" |
corHover :| "Cor do hover do botao" |
onClick :| `() => void`

&nbsp;

---

<h2 align='center'>-> LzInput<h2>
&nbsp;

![Alt text](<src/assets/img/input 1.png>)

Chave|Valores| Valores|Valores|Valores
----|--------|--------|------|------
label :| "O que vai dentro do label"|
type :| 'text' | 'email' | 'password' | 'date'
value :| "Value"
corPrimaria :| "Cor principal" |
corSecundaria :| "Cor secundaria" |
corBg :| "Cor do BG" |
onClick :| `() => void`

&nbsp;

---

# Problemas e Soluções -> <div id='problemas__solucoes'></div>

## Incompatibilidade do Node:
> Com a atualização do `storybook` não consegui utilizar nem o npm nem o yarn para inicializa-lo, por tanto eu mudei a versão do `Node` com o `NVM` e mudei a versão do `storybook` descrita no package.json. Após isso eu exclui as dependencias do node_module e reinstalei, forçãdo a baixar a versão mais antiga do `storybook` e assim consegui roda-lo com o `npm run storybook`

&nbsp;

---

# READEME do TSDX -> <div id='tsdx'></div>

# TSDX React w/ Storybook User Guide

Congrats! You just saved yourself hours of work by bootstrapping this project with TSDX. Let’s get you oriented with what’s here and how to use it.

> This TSDX setup is meant for developing React component libraries (not apps!) that can be published to NPM. If you’re looking to build a React-based app, you should use `create-react-app`, `razzle`, `nextjs`, `gatsby`, or `react-static`.

> If you’re new to TypeScript and React, checkout [this handy cheatsheet](https://github.com/sw-yx/react-typescript-cheatsheet/)

## Commands

TSDX scaffolds your new library inside `/src`, and also sets up a [Parcel-based](https://parceljs.org) playground for it inside `/example`.

The recommended workflow is to run TSDX in one terminal:

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run either Storybook or the example playground:

### Storybook

Run inside another terminal:

```bash
yarn storybook
```

This loads the stories from `./stories`.

> NOTE: Stories should reference the components as if using the library, similar to the example playground. This means importing from the root project directory. This has been aliased in the tsconfig and the storybook webpack config as a helper.

### Example

Then run the example inside another:

```bash
cd example
npm i # or yarn to install dependencies
npm start # or yarn start
```

The default example imports and live reloads whatever is in `/dist`, so if you are seeing an out of date component, make sure TSDX is running in watch mode like we recommend above. **No symlinking required**, we use [Parcel's aliasing](https://parceljs.org/module_resolution.html#aliases).

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.

## Configuration

Code quality is set up for you with `prettier`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.

### Jest

Jest tests are set up to run with `npm test` or `yarn test`.

### Bundle analysis

Calculates the real cost of your library using [size-limit](https://github.com/ai/size-limit) with `npm run size` and visulize it with `npm run analyze`.

#### Setup Files

This is the folder structure we set up for you:

```txt
/example
  index.html
  index.tsx       # test your component here in a demo app
  package.json
  tsconfig.json
/src
  index.tsx       # EDIT THIS
/test
  blah.test.tsx   # EDIT THIS
/stories
  Thing.stories.tsx # EDIT THIS
/.storybook
  main.js
  preview.js
.gitignore
package.json
README.md         # EDIT THIS
tsconfig.json
```

#### React Testing Library

We do not set up `react-testing-library` for you yet, we welcome contributions and documentation on this.

### Rollup

TSDX uses [Rollup](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.

## Continuous Integration

### GitHub Actions

Two actions are added by default:

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request using [size-limit](https://github.com/ai/size-limit)

## Optimizations

Please see the main `tsdx` [optimizations docs](https://github.com/palmerhq/tsdx#optimizations). In particular, know that you can take advantage of development-only optimizations:

```js
// ./types/index.d.ts
declare var __DEV__: boolean;

// inside your code...
if (__DEV__) {
  console.log('foo');
}
```

You can also choose to install and use [invariant](https://github.com/palmerhq/tsdx#invariant) and [warning](https://github.com/palmerhq/tsdx#warning) functions.

## Module Formats

CJS, ESModules, and UMD module formats are supported.

The appropriate paths are configured in `package.json` and `dist/index.js` accordingly. Please report if any issues are found.

## Deploying the Example Playground

The Playground is just a simple [Parcel](https://parceljs.org) app, you can deploy it anywhere you would normally deploy that. Here are some guidelines for **manually** deploying with the Netlify CLI (`npm i -g netlify-cli`):

```bash
cd example # if not already in the example folder
npm run build # builds to dist
netlify deploy # deploy the dist folder
```

Alternatively, if you already have a git repo connected, you can set up continuous deployment with Netlify:

```bash
netlify init
# build command: yarn build && cd example && yarn && yarn build
# directory to deploy: example/dist
# pick yes for netlify.toml
```

## Named Exports

Per Palmer Group guidelines, [always use named exports.](https://github.com/palmerhq/typescript#exports) Code split inside your React app instead of your React library.

## Including Styles

There are many ways to ship styles, including with CSS-in-JS. TSDX has no opinion on this, configure how you like.

For vanilla CSS, you can include it at the root directory and add it to the `files` section in your `package.json`, so that it can be imported separately by your users and run through their bundler's loader.

## Publishing to NPM

We recommend using [np](https://github.com/sindresorhus/np).

## Usage with Lerna

When creating a new package with TSDX within a project set up with Lerna, you might encounter a `Cannot resolve dependency` error when trying to run the `example` project. To fix that you will need to make changes to the `package.json` file _inside the `example` directory_.

The problem is that due to the nature of how dependencies are installed in Lerna projects, the aliases in the example project's `package.json` might not point to the right place, as those dependencies might have been installed in the root of your Lerna project.

Change the `alias` to point to where those packages are actually installed. This depends on the directory structure of your Lerna project, so the actual path might be different from the diff below.

```diff
   "alias": {
-    "react": "../node_modules/react",
-    "react-dom": "../node_modules/react-dom"
+    "react": "../../../node_modules/react",
+    "react-dom": "../../../node_modules/react-dom"
   },
```

An alternative to fixing this problem would be to remove aliases altogether and define the dependencies referenced as aliases as dev dependencies instead. [However, that might cause other problems.](https://github.com/palmerhq/tsdx/issues/64)
