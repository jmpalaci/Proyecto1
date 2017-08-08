var express = require ('express');
var expjade = require('express-jade');
var path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views'));

app.set ('view engine','jade')

app.use(express.static('public'));

app.get ('/', function (solicitud, respuesta){
	respuesta.render('index');
});


app.listen(8080);