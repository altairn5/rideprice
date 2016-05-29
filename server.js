
var express = require('express'),
bodyParser = require('body-parser'),
path = require('path'),
controllers = require('./controllers'),
hbs = require('express-handlebars'),
googleApiKey,
googleVerification,
app = express();
require('dotenv').config();




/*Configuration*/


/*Port*/

app.set('port', (process.env.PORT||3000));

/*Google Api Key*/

googleApiKey = process.env.GOOGLE_KEY;
console.log("googleApiKey = ", googleApiKey)
googleVerification = process.env.GOOGLE_VERIFICATION;


/*View Engine*/
app.engine('handlebars', hbs({default: 'main'}));
app.set('view engine', 'handlebars');


/*Dependecies*/

app.use('/static', express.static(__dirname + '/public'));
app.use('/vendor', express.static(__dirname + '/bower_components'));

/*Body Parser*/
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */
app.get(['/', '/index', '/show'], function (req, res){


	// res.sendFile(__dirname  + '/views/main.html');
	res.render('main', {salutation : "This Is Rideprice", appName: "Rideprice", APIKey: googleApiKey, verification: googleVerification})

});

/*Show Ride Price*/

app.get('/prices', controllers.prices.show);





/**********
 * SERVER *
 **********/

/*App listen port 3000*/

app.listen(app.get('port'),function(){

	console.log('Server Listening At Port 3000');

})