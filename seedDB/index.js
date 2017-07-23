var mongoose 	= require('mongoose'),
	Customers 	= require('./customers');

var data = [
			{
				name: "Rakib Hasan", 
				trackingId: "1234561",
				statusMessage: "The international shipment has been processed in the parcel center of origin",
				service_metric: "2-working-day",
				type: "Envelope 1",
				parcel: {
						id: 3873173242,
					    type: "Envelope 1",
					    description: "document",
					    service: [
					      "Pick up",
					      "door-to-door",
					      "international"
					    ],
					    dimension: {
					      length: 13.18,
					      width: 9.2,
					      height: 1
					    },
					    weight: "0.11",
					    address: {
					      to: {
					        name: "HackerEarth",
					        ddress: "5th Block, Koramangala, Bangalore 560095, IN",
					        zip: "560095"
					      },
					      from: {
					        name: "HCL",
					        address: "68 King William St, London EC4N 7DZ, UK",
					        zip: "EC4N 7DZ"
					      }
					}
				},
			  	tracking: {
			  		code: "3873173242",
			      current_status: "NOIDA: Out for delivery",
			      notification: {
			        email: null,
			        text: "+44-974-196-7699"
			      },
			      updates: {
			        1: [
			          "timestamp",
			          "location",
			          "status"
			        ],
			        2: [
			          "timestamp",
			          "location",
			          "status"
			        ],
			        3: [
			          "timestamp",
			          "location",
			          "status"
			        ]
			      }
			  	}
			},
		    {
		    	name: "Mayank Maheshwari", 
		    	trackingId: "1234562",
		    	statusMessage: "The shipment has arrived in the destination country",
		    	service_metric: "5-working-day",
		    	type: "Box 1",
		    	parcel: {
						id: 3873173242,
					    type: "Box 1",
					    description: "phone",
					    service: [
					      "Pick up",
					      "door-to-door",
					      "international"
					    ],
					    dimension: {
					      length: 13.18,
					      width: 9.2,
					      height: 1
					    },
					    weight: "0.11",
					    address: {
					      to: {
					        name: "HackerEarth",
					        ddress: "5th Block, Koramangala, Bangalore 560095, IN",
					        zip: "560095"
					      },
					      from: {
					        name: "HCL",
					        address: "68 King William St, London EC4N 7DZ, UK",
					        zip: "EC4N 7DZ"
					      }
					}
				},
			  	tracking: {
			  		code: "3873173242",
			      current_status: "Chennai: Out for Delivery",
			      notification: {
			        email: null,
			        text: "+44-974-196-7699"
			      },
			      updates: {
			        1: [
			          "timestamp",
			          "location",
			          "status"
			        ],
			        2: [
			          "timestamp",
			          "location",
			          "status"
			        ],
			        3: [
			          "timestamp",
			          "location",
			          "status"
			        ]
			      }
			  	}
		    },
		    {
		    	name: "HackerEarth", 
		    	trackingId: "1234563",
		    	statusMessage: "The shipment has been successfully delivered",
		    	service_metric: "domestic",
		    	type: "Box 3",
		    	parcel: {
						id: 3873173242,
					    type: "Box 3",
					    description: "shoes",
					    service: [
					      "Pick up",
					      "door-to-door",
					      "international"
					    ],
					    dimension: {
					      length: 13.18,
					      width: 9.2,
					      height: 1
					    },
					    weight: "0.11",
					    address: {
					      to: {
					        name: "HackerEarth",
					        ddress: "5th Block, Koramangala, Bangalore 560095, IN",
					        zip: "560095"
					      },
					      from: {
					        name: "HCL",
					        address: "68 King William St, London EC4N 7DZ, UK",
					        zip: "EC4N 7DZ"
					      }
					}
				},
			  	tracking: {
			  		code: "3873173242",
			      current_status: "London: Successfully delivered",
			      notification: {
			        email: null,
			        text: "+44-974-196-7699"
			      },
			      updates: {
			        1: [
			          "timestamp",
			          "location",
			          "status"
			        ],
			        2: [
			          "timestamp",
			          "location",
			          "status"
			        ],
			        3: [
			          "timestamp",
			          "location",
			          "status"
			        ]
			      }
			  	}
		    }
	];

function seedDB(){	

	//Input sample data 
	data.forEach(function(seed){
		Customers.create(seed, function(err, customer){
			if(err){
				console.log(err);
			} else {
				console.log("Added a customer");
			}
		})
	})
}	


module.exports = seedDB;