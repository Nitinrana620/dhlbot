'use strict';

const endConversation = require('./endConversation');
const dStatus = require('./deliveryStatus');

module.exports = (session, f, agenda) => {
	
	let deliveryStatus = dStatus(session, f);

	const actions = {
		send(request, response) {
			const{sessionId, context, entities} = request;
			const {text} = response;
			return new Promise((resolve, reject) => {
				let{fbid} = session.get(sessionId);
				f.txt(fbid, text);
				return resolve();
			});
		},
	
	
		deliveryStatus,
		endConversation
	}

	return actions;
}