import {Anix} from '../src/anix.mjs'

const ENDPOINT_WS = process.env.ENDPOINT_WS

const eth = new Anix('eth', ENDPOINT_WS)
const debug = new Anix('debug', ENDPOINT_WS)

const conn = new WebSocket(ENDPOINT_WS, {})

const contractsPublishedOnBlock = async blockTag => {
    console.log(`1) Block ${blockTag} request: `)
    const block = await eth.getBlockByNumber(`0x${blockTag.toString(16)}`, false)
    console.log(`\t2) Transactions request: ${block}`)

    console.log(`\t2) Transactions request: ${block.transactions.length}`)
    const receipts = await Promise.all(block.transactions.map(async (tx) => {
        return (await eth.getTransactionReceipt(tx)).contractAddress
    }))

    return receipts.filter(e => e != null)
}

console.log(await contractsPublishedOnBlock(19000000))
console.log(await contractsPublishedOnBlock(19000001))
console.log(await contractsPublishedOnBlock(19000002))
