# Serper for JavaScript/TypeScript

Scrape Google search results using [Serper](https://serper.dev/), the fastest and most affordable SERP API.

## Quick Start

### Node.js

- Supports most modern Node.js versions.

```sh
# npm
npm install serper
# yarn
yarn add serper
# pnpm
pnpm add serper
```

```js
import { Serper } from "serper"; // ES Modules
const { Serper } = require("serper"); // CommonJS Modules

const serper = new Serper({
  apiKey: process.env.SERPER_API_KEY // Get your API key at https://serper.dev/api-key
});
```

## Features

- TypeScript support.
- Works in Node.js and the browser.
- Promises and async/await support.

## Configuration

Configuration is very simple; just two things. The `apiKey` and `timeout` are both parameters specified in the original `Serper` object creation.

```js
const serper = new Serper({
  apiKey: process.env.SERPER_API_KEY, // Your API key
  timeout: 10000 // Timeout in milliseconds
});
```

## Pagination

- Coming very soon!

## To Do

- [ ] Implement pagination.
- [ ] Better request prechecking.
- [ ] Unit tests.
- [ ] Documentation.
- [ ] Any other ideas you may have.

## License

This code is released under the permissible MIT license. Anyone can contribute, use, redistribute, and sell this library without any credit, although it is appreciated.
