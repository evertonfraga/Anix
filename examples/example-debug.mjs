import {Anix} from '../anix.mjs'

const ENDPOINT = process.env.ENDPOINT_HTTP

const eth = new Anix('eth', ENDPOINT)
const debug = new Anix('debug', ENDPOINT)

const postStateForBlock = async blockTag => {
    const block = await eth.getBlockByNumber(blockTag, false)

    console.log(block)
    
    const postState = await Promise.all(block.transactions.map(async (tx) => {
        const state = await debug.traceTransaction(tx, {tracer: 'prestateTracer', tracerConfig: {diffMode: true}})
        return state.post
    }))
    console.log(postState)
} 
await postStateForBlock('latest')
