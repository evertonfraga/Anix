#!/usr/bin/env node

import {Anix, toHex} from './anix.mjs'
import repl from 'node:repl'

// input validation
if (process.argv.length <= 2) {
    throw new Error("Please pass a valid JSON-RPC endpoint URL as parameter to npx anix-js. Example:\nnpx anix-js https://nd-aaaaaaaaaaaaaaaaaaaaa.t.ethereum.managedblockchain.us-east-1.amazonaws.com/\\?billingtoken\\=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
}

const endpoint = process.argv[process.argv.length - 1]

if (!URL.canParse(endpoint)) {
    throw new Error("Please pass a valid JSON-RPC endpoint URL as parameter to npx anix-js. Example:\nnpx anix-js https://nd-aaaaaaaaaaaaaaaaaaaaa.t.ethereum.managedblockchain.us-east-1.amazonaws.com/\\?billingtoken\\=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
}

const pp = s => `\x1b[35m${s}\x1b[0m`;
const tq = s => `\x1b[36m${s}\x1b[0m`;

console.log("")
console.log(pp`   ♦   ♦   ♦   ♦   ♦   ♦   ♦   ♦   ♦   ♦   ♦   ♦`)
console.log(tq` ♦   ♦   ♦   ♦  ` + "Welcome to Anix" + tq`  ♦   ♦   ♦   ♦`)
console.log(pp`   ♦   ♦   ♦   ♦   ♦   ♦   ♦   ♦   ♦   ♦   ♦   ♦\n`)

const r = repl.start({
    prompt: 'Anix > ',
    useColors: true
})

;['eth', 'net', 'debug', 'txpool'].map(namespace => {
    const anix = new Anix(namespace, endpoint)
    Object.defineProperty(r.context, namespace, { value: anix, configurable: false, enumerable: true })
}
)