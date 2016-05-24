var uberServerToken = process.env.UBER_API_KEY;
var http = require('http'),
Uber = require('uber-api')({server_token: uberServerToken ,version:'v1'});

/*Prices Controllers*/


function meau(req, res){

	console.log('list all prices');

}


function create(req, res){

}


function show(req, res){


 
      var coordinates = req.query;


      console.log("params coming in " , coordinates.lat1);
      // params coming in  { lat1: '37.763168',
	  // lng1: '-122.437013',
	  // lat2: '37.790841',
	  // lng2: '-122.4012802' }

	  // Uber.getPriceEstimate(start_latitude, start_longitude, end_latitude, end_longitude[, callback])


	  Uber.getPriceEstimate(coordinates.lat1, coordinates.lng1, coordinates.lat2, coordinates.lng2 , function (error, response){

	  				if(error){
	  					console.log("the error is ", error);
	  				}
	  				else{

                	console.log(response);
	  				}

            	});
   
       // http.get({
      	// 		url: "https://api.uber.com/v1/estimates/price?",
    			// headers: {
       //  				  Authorization:  "Token " + uberServerToken
    			// 		 },
    			// data: 	 {
				   //      start_latitude: coordinates.lat1,
				   //      start_longitude: coordinates.lng1,
				   //      end_latitude: coordinates.lat2,
				   //      end_longitude: coordinates.lng2
   				// 	  	 },
      	// 		},
   				// function (response){

   				// 	console.log("response = ", response)

   				// 	response.on("error", function(error){

   				// 		console.log("error = ", error);
   				// 	}),

       //          	response.on("data", function(data){

       //          		console.log("data HERE", data , " and JSON.parse(data)", JSON.parse(data));

       //          		res.send(JSON.parse(data));
       //          	});
      	// 		});

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