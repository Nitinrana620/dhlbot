var mongoose = require('mongoose');


var customerSchema = new mongoose.Schema({
    name: String,
    trackingId: String,
    statusMessage: String,
  	service_metric: String,
  	type: String,
  	parcel: {},
  	tracking: {},
});

module.exports =  mongoose.model("Customers", customerSchema);