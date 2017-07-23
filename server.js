// *** main dependencies *** //
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var swig = require('swig');

// *** routes *** //
var routes = require('./routes/index.js');

// *** express instance *** //
var app = express();

// *** view engine *** //
var swig = new swig.Swig();
app.engine('html', swig.renderFile);
app.set('view engine', 'html');


// *** static directory *** //
app.set('views', path.join(__dirname, 'views'));

// *** config middleware *** //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './client/public')));


// *** main routes *** //
app.use('/', routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//start a server on port 80 and log its start to our console
var server = app.listen(80, function () {

  var port = server.address().port;
  console.log('Example app listening on port ', port);

});




//////////////////// *** FUNCTIONS *** ////////////////////

function GPIO() {
	var  ledToggle, pressCount;
	//provision the gpio pins 22 for the led output and 17 for the button input
	var led= require("pi-pins").connect(22),
	    button = require("pi-pins").connect(17);

	//set the pin mode,  setting pin 22 as an output and 17 as an input
	button.mode('in');
	led.mode('out');

	//set the initial value of the LED to be off.
	ledToggle = false;
	pressCount= 0;
	led.value(true);

	//look for a button press event and switch on the LED for 2 seconds when this happens.
	button.on('rise', function () {
	    console.log("button pressed: "+ (++pressCount) +" time(s)");
	    ledToggle = !ledToggle;
	    led.value(ledToggle);
	});	
}


function foodNow(seconds) {

}


function foodVacations(seconds, vacation_time) {

}


function foodAuto(seconds) {

}


module.exports = app;
