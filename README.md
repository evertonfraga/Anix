# Anix

[![NPM Package][npm-badge]][npm-link] 

<p align="center">
  <img src="./anix.png" alt="Image description" width="350"/>
</p>

<p align=center>
<em>Minimal (< 1 Kb), dependency-free and flexible JSON-RPC client library for Ethereum.</em>
</p>

The goal is to make it easy to work with RPC endpoints.

This library uses JavaScript Proxy object to allow arbitrary prototype method calls, the API offers an intuitive translation to the raw RPC methods, where `eth_getLogs` becomes `eth.getLogs()`, and so on.

### Installation
```sh
$ npm i --save-dev anix-js
```

### Basic usage: 
**main.mjs**:
```js
import {Anix} from 'anix-js'

const eth = new Anix('eth', <YOUR HTTP RPC ENDPOINT>)

console.dir(await eth.getBlockByNumber('latest', false))
```

```sh
$ node main.mjs

- or - 

$ bun run main.mjs
```

### Can be used for arbitrary/custom RPC methods:

```js
import {Anix} from 'anix-js'

const eth = new Anix('eth', <YOUR HTTP RPC ENDPOINT>)

await eth.sendBundle({…})
```

### Read-Eval-Print-Loop

Anix has a built-in REPL script, making it easy to prototype.

```sh
$ npx anix-js http://my-rpc-url.xyz

   ♦   ♦   ♦   ♦   ♦   ♦   ♦   ♦   ♦   ♦   ♦   ♦
 ♦   ♦   ♦   ♦  Welcome to Anix  ♦   ♦   ♦   ♦
   ♦   ♦   ♦   ♦   ♦   ♦   ♦   ♦   ♦   ♦   ♦   ♦

Anix > await eth.blockNumber()
'0x12705de'
```



### Benefits of using Anix:
- Works with any set of custom RPC methods, because of its native proxy object.
- It resembles the Geth console JavaScript APIs.
- It's incredibly portable, with a minimal footprint (less than 1kb minified).
- It uses the native `fetch` method, implemented on top of Undici. 
- No dependencies attached: Anix is not prone to supply-chain attacks.


Check the [examples](./examples) directory for boilerplate code.


### Questions?
Ping me on [twitter](https://twitter.com/evertonfraga).

[npm-badge]: https://img.shields.io/npm/v/anix-js.svg
[npm-link]: https://www.npmjs.com/package/anix-js
