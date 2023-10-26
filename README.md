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

const results = await serper.search("search terms");
```

## Features

- TypeScript support.
- Works in Node.js and the browser.
- Promises and async/await support.

## Configuration

Configuration is very simple; just three things.

- The required API key.
- An optional request timeout.
- A toggle for the cache.

```js
const serper = new Serper({
  apiKey: process.env.SERPER_API_KEY, // Your API key, this is required
  timeout: 10000, // Request timeout in milliseconds, 10000 by default
  doCache: true // Enable to cache responses, true by default
});
```

## Basic Usage

The client usage is just as simple as what was shown in the quick start. Simply initializing a client, then making requests with async methods.

Currently, you can search under all supported Serper API routes. They are:

- Search - Typical rich search page.
- News - Current Google news articles only.
- Images - Just images and links.
- Videos - Just videos and links.
- Places - Google maps locations and information.

All of these can be called using the exact same client API and the respective name of the route as the function name. By replacing "search" in the quick start function, you can run any search imaginable!

## Pagination

Pagination is built in to Serper with three simple functions, `nextPage`, `prevPage` and `toPage`. Currently, due to API limitations, there is no indicator in `nextPage` as to the end of all pages. The `prevPage` function just returns the first page if you try to go negative. The self explanatory `toPage` results in the specified page.

All client responses contain `nextPage` and `prevPage`, as well as all pagination responses.

```js
let results = await serper.search("dog shelters");
for (let x = 0; x < 5; x++) {
  results = await results.nextPage();
}
```

## Caching

All responses from the Serper Client are locally cached to reduce credit usage during pagination and repeated searching. The cache can easily be disabled by setting the `cache` config value to `false`, although this is not recommended as it will significantly slow down your application, and should only be used when current information (ie. news) is needed.

## Documentation and Examples

API docs are available online [here](docs/), and a large collection of usage examples are available in the [examples/](examples/) directory.

> **Note:** All examples assume top level await, which is supported in modern Node.js and most modern browers.

## To Do

- [x] Implement pagination.
- [ ] A more robust Response object with caching.
- [ ] Better request prechecking.
- [ ] External (ie. Redis) caching.
- [ ] Unit tests.
- [ ] Documentation.
- [ ] Deno support.
- [ ] Module bundler.
- [ ] Any other ideas you may have.

## License

This code is released under the permissible MIT license. Anyone can contribute, use, redistribute, and sell this library without any credit, although it is appreciated.
