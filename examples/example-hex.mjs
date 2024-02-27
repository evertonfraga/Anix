import {Anix, toHex} from '../anix.mjs'

const eth = new Anix('eth', process.env.ENDPOINT_HTTP)

console.log(toHex(5) == '0x5')

console.log(toHex(255) == '0xff')

console.log(toHex(19_000_000) == '0x121eac0')

// Supports optional padding parameter
console.log(toHex(5, 20) == '0x00000000000000000005')

// Useful to format function inputs
console.dir(await eth.getBlockByNumber(toHex(19_000_000), false))

