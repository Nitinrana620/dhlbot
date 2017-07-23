'use strict';
var mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost/dhlbot"); 
const {MONGO_URI} = require('../config');
mongoose.connect(`${MONGO_URI}`);
var Customers = require('../seedDB/customers');

const {fetchEntity} = require('../utils');

const deliveryStatus = (session, f) => {
	return ({sessionId, context, entities}) => {
		return new Promise((resolve, reject) => {
			let name = fetchEntity(entities, 'name');
			let trackingId = fetchEntity(entities, 'trackingId');

			if(name) {
				let nm ="";
				let names = name.split(" ");
				for(var i=0; i<names.length; i++){
					names[i] = names[i].charAt(0).toUpperCase() + names[i].slice(1);
				}
				for(var i=0; i<names.length; i++){
					if(i>0){
						nm += " " + names[i];
					}else{
						nm += names[i];
					}
					
				}
				// console.log(nm);
				Customers.find({name: `${nm}`}, function(err, customer){
					if(err) {
						console.log(err);
						f.txt(fbid, `Sorry, there's no order matching those credentials.`);	
					}
					let{fbid} = session.get(sessionId);
					if(customer.length>0){
						let stat = customer[0].tracking.current_status;
						f.txt(fbid, `The current status of your delivery is: ${stat}`);
					} else {
						f.txt(fbid, `Sorry, there's no order matching those credentials.`);
					}			
				})		
			} else if(trackingId){
				Customers.find({trackingId: `${trackingId}`}, function(err, customer){
					if(err) {
						console.log(err);
						f.txt(fbid, `Sorry, there's no order matching those credentials.`);
					}
					let{fbid} = session.get(sessionId);
					if(customer.length>0){
						let stat = customer[0].tracking.current_status;
						f.txt(fbid, `The current status of your delivery is: ${stat}`);
					} else {
						f.txt(fbid, `Sorry, there's no order matching those credentials.`);
					}	
				})		
			} else {
				f.txt(fbid, `Sorry, there's no order matching those credentials.`);
			}

			return resolve();
		})
	}
}

module.exports = deliveryStatus;
