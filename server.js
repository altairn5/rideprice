
var express = require('express'),
bodyParser = require('body-parser'),
path = require('path'),
controllers = require('./controllers'),
hbs = require('express-handlebars');
app = express();

/*Configuration*/


/*Port*/

app.set('port', (process.env.PORT||3000));

var keys = process.env.GOOGLE_API_KEY;


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


	// res.sendFile(__dirname  + '/views/index.html');
	   res.render('main', {salutation : "Hello There", appName: "Rideprice", key: keys})

});

app.get('/prices', controllers.prices.index);



/**********
 * SERVER *
 **********/

/*App listen port 3000*/

app.listen(app.get('port'),function(){

	console.log('Server Listening At Port 3000');

})