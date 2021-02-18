# proxy-compare

[![CI](https://img.shields.io/github/workflow/status/dai-shi/proxy-compare/CI)](https://github.com/dai-shi/proxy-compare/actions?query=workflow%3ACI)
[![npm](https://img.shields.io/npm/v/proxy-compare)](https://www.npmjs.com/package/proxy-compare)
[![size](https://img.shields.io/bundlephobia/minzip/proxy-compare)](https://bundlephobia.com/result?p=proxy-compare)

Compare two objects using accessed properties with Proxy

## Introduction

This is an internal library used in [React Tracked](https://react-tracked.js.org).

## Install

```bash
npm install proxy-compare
```

## Usage

```javascript
$ node
> const { createDeepProxy, isDeepChanged } = require('proxy-compare')
undefined
> state = { a: 1, b: 2 }
{ a: 1, b: 2 }
> affected = new WeakMap()
WeakMap { [items unknown] }
> proxy = createDeepProxy(state, affected)
Proxy [ { a: 1, b: 2 },
  { r: [Function],
    u: [Function],
    get: [Function],
    has: [Function],
    ownKeys: [Function],
    p: Proxy [ [Object], [Circular] ],
    o: { a: 1, b: 2 },
    t: false,
    a: WeakMap { [items unknown] },
    c: undefined } ]
> proxy.a
1
> isDeepChanged(state, { a: 1, b: 22 }, affected)
false
> isDeepChanged(state, { a: 11, b: 2 }, affected)
true
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### createDeepProxy

Create a proxy.

This function will create a proxy at top level and proxy nested objects as you access them,
in order to keep track of which properties were accessed via get/has proxy handlers:

NOTE: Printing of WeakMap is hard to inspect and not very readable
for this purpose you can use the `affectedToPathList` helper.

#### Parameters

-   `obj` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Object that will be wrapped on the proxy.
-   `affected` **[WeakMap](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)&lt;[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object), unknown>** WeakMap that will hold the tracking of which properties in the proxied object were accessed.
-   `proxyCache` **[WeakMap](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)&lt;[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object), unknown>?** WeakMap that will help keep referential identity for proxies.

#### Examples

```javascript
import { createDeepProxy } from 'proxy-compare';

const orginal = { a: "1", c: "2", d: { e: "3" } };
const affected = new WeakMap();
const proxy = createDeepProxy(orginal, affected);

proxy.a // Will mark as used and track its value.
// This will update the affected WeakMap with orginal as key
// and a Set with "a"

proxy.d // Will mark "d" as accessed to track and proxy itself ({ e: "3" }).
// This will update the affected WeakMap with orginal as key
// and a Set with "d"
```

Returns **[Proxy](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Proxy)&lt;[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>** Object wrapped in a proxy.

### isDeepChanged

compare two object

It will compare only with affected object properties

#### Parameters

-   `origObj` **any** 
-   `nextObj` **any** 
-   `affected` **[WeakMap](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)&lt;[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object), any>** 
-   `cache` **[WeakMap](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)&lt;[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object), any>?** 
-   `mode`   (optional, default `0`)

#### Examples

```javascript
import { isDeepChanged } from 'proxy-compare';

const objToCompare = ...;
const changed = isDeepChanged(obj, objToCompare, affected);
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## Projects using this library

-   [react-tracked](https://github.com/dai-shi/react-tracked)
-   [reactive-react-redux](https://github.com/dai-shi/reactive-react-redux)
-   [svelte3-redux](https://github.com/dai-shi/svelte3-redux)
-   [proxy-memoize](https://github.com/dai-shi/proxy-memoize)
-   [valtio](https://github.com/pmndrs/valtio)

## Similar libraries

-   [proxyequal](https://www.npmjs.com/package/proxyequal)
-   [proxy-state-tree](https://www.npmjs.com/package/proxy-state-tree)
-   [proxy-watcher](https://www.npmjs.com/package/proxy-watcher)
