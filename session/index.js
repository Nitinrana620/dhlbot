'use strict';

const crypto = require('crypto');
const {findById} = require('../utils')
const sessionStore = new Map();
const session = {
	init(id) {
		//finding session object by facebook id
		let sessionId = findById(id, sessionStore);
		if(sessionId) {
			return sessionId;
		} else {
			//instantiate a new sessionId
			//sessionId, context object
			let newSessionId = crypto.randomBytes(12).toString('hex');
			let obj = {
				fbid: id,
				context: {}
			}

			sessionStore.set(newSessionId, obj); 
			return newSessionId;
		}
	},
	get(sessionId) {
		return sessionStore.get(sessionId);
	},
	update(sessionId, context){
		let obj = sessionStore.get(sessionId);
		obj.context = context;
		return sessionStore.set(sessionId, obj);
	},
	delete(sessionId) {
		return sessionStore.delete(sessionId);
	}
}

module.exports = session;