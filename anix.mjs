/* global fetch */

export class Anix {
    static id = 0

	static makePayload = (method, params, id=1) => ({ jsonrpc: '2.0', id, method, params })

	constructor(namespace, endpoint, options) {
		Object.assign(this, {
			namespace, 
			endpoint,
			options: { debugRequest: false, debugResponse: false, ...options }
		})
		return new Proxy(this, {
			get: (target, prop) => {
				return async function() {
					const payload = Anix.makePayload(`${target.namespace}_${prop}`, [...arguments], ++Anix.id)
					target.options.debugRequest && console.log(payload)
	
					return fetch(target.endpoint, {
						method: 'POST',
						body: JSON.stringify(payload),
						headers: { 'Content-type': 'application/json;' }
					}).then(res => res.json()).then(e => {
						target.options.debugResponse && console.dir(e)
						if (e.error) throw JSON.stringify(e.error)
						return e.result
					})
				}
			}
		})
	}
}

export const toHex = (n, chars) => '0x' + n.toString(16).padStart(chars || n.toString(16).length, '0')
