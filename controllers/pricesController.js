require('dotenv').config();
var uberServerToken =  process.env.API_UBER; 
console.log('uberServerToken =', uberServerToken);
var https = require('https'),
Uber = require('uber-api')({server_token: process.env.API_UBER, version:'v1'});



/*Prices Controllers*/


function meau(req, res){

	console.log('list all prices');

}


function create(req, res){

}


function show(req, res){

     var coordinates = req.query;

	 var options = {
				 	sLat:coordinates.lat1,
					sLng:coordinates.lng1,
					eLat:coordinates.lat2,
					eLng:coordinates.lng2
				   };		
	

	  Uber.getPriceEstimate(options , function (error, response){

	  				if(error){
	  					console.log("the error is ", error);
	  				}
	  				else{

                	res.send(response);
	  				}

            	});

	  		/*End Show Controller*/
			}


function destroy(req, res){

}


function update(req, res){

}


module.exports = {

	index: meau,
	create: create,
	show: show,
	destroy: destroy,
	update: update
}