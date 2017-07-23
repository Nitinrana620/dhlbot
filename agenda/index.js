'use strict';

const Agenda = require('agenda');
const {MONGO_URI} = require('../config');
const agenda = new Agenda({
	db: {
		address: MONGO_URI
	}
});



module.exports = (f) => {
	//agenda jobs to schedule

	//displaying a reminder
	agenda.define('reminder', job => {
		const{fbid, first_name, task} = job.attrs.data;
		f.txt(fbid, `Hey, ${first_name} reminding you to ${task}!`);
	});

	
	return agenda;
}