
var express = require('express'),
bodyParser = require('body-parser'),
path = require('path'),
controllers = require('./controllers'),
app = express();

/*Configuration*/

/*Port*/

app.set('port', (process.env.PORT||3000));


/**********
 * SERVER *
 **********/

/*App listen port 3000*/

app.listen(app.get('port'),function(){

	console.log('Server Listening At Port 3000');

})