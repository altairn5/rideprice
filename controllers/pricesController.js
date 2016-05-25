var uberServerToken = process.env.API_UBER;

 //Having issues with process.env.UBER_API_KEY
var https = require('https'),
Uber = require('uber-api')({server_token: uberServerToken, version:'v1'});
console.log("process.env.API_KEY_UBER", process.env.API_UBER, "uberServerToken", uberServerToken);


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

                	console.log(response);
	  				}

            	});

		

		// var options = {
		// host: 'api.uber.com',
		// path: '/v1/estimates/price?',
		// headers: {
		// 		Authorization:  "Token " + uberServerToken
		// 		}
		// 	};

		// var data ={
		//         start_latitude: coordinates.lat1,
		//         start_longitude: coordinates.lng1,
		//         end_latitude: coordinates.lat2,
		//         end_longitude: coordinates.lng2
		// 	  	 };
	

		// https.get(options, data, function(response) {
		
		// 	  response.on("prices", function(prices){

  //             console.log("data HERE", prices , " and JSON.parse(data)", JSON.parse(prices));

  //      //          		res.send(JSON.parse(data));
		// 	  });

		// });

		// write the request parameters
		// req.write('post=data&is=specified&like=this');
		// req.end();


   
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