import {Anix} from '../src/anix.mjs'

const eth = new Anix('eth', process.env.ENDPOINT_HTTP)

console.dir(await eth.getBlockByNumber('latest', false))
console.dir(await web3.sha3('blablabla'))
