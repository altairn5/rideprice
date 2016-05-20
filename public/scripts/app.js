var autocomplete,
autocompleteEnd,
defaultBounds,
options,
map;

$(document).ready(function(){
	console.log('Jamaica');
	initAutocomplete();


	/*Rideprice Form*/
	$('form.findPrice').on('submit',function(e){

		e.preventDefault();
		var address = $(this).serializeArray();
		var origin = address[0].value;
		var destination = address[1].value;

		mapCoordinates(origin, destination);

	});


});


// google maps bounds
defaultBounds = new google.maps.LatLngBounds(
new google.maps.LatLng(71.3867745,-66.9502861),
new google.maps.LatLng(18.9110642,172.4458955));

options = {
  bounds: defaultBounds
};



/*Auto Complete Function*/

function initAutocomplete() {
  
  autocomplete = new google.maps.places.Autocomplete((document.getElementById('orin')), options);
  

  autocompleteEnd = new google.maps.places.Autocomplete((document.getElementById('destin')), options);
  
}

/*Generate Coordinates*/

function mapCoordinates(addressOne, addressTwo){

    var address = addressOne.replace(/\s|,/g,"+");
    console.log(address);
    var endAddress = addressTwo.replace(/\s|,/g,"+");
      console.log(endAddress);

$.when(
       $.get("https://maps.googleapis.com/maps/api/geocode/json?", {"address" : address}, function(data){
         originLtLg = data.results[0].geometry.location;
        }),

      $.get("https://maps.googleapis.com/maps/api/geocode/json?", {"address" : endAddress}, function(data){
        destinLtLg = data.results[0].geometry.location;
      })
).then(function(){

	console.log(originLtLg);
	console.log(destinLtLg);

    // originlat = originLtLg.lat;
    // originlng = originLtLg.lng;
    // destinlat = destinLtLg.lat;
    // destinlng = destinLtLg.lng;

   

    renderGoogleMap(originLtLg,destinLtLg);
    
});
}


/*Generate Map Google*/

function renderGoogleMap(originCoord, destinCoord){

	console.log(originCoord);

$('#map').animate({'height':'384px'},2000, function(){


  map = new google.maps.Map(document.getElementById("map"),{
      center:
      	originCoord,
      	destinCoord,
        zoom:13,
        zoomControl: false,
        scaleControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true
  });

/*  End Animate Function*/
});

}
