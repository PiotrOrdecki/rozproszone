
var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('Witaj w node..., spróbuj /inny');
	console.log('Wyświetlono stronę /');
});
app.get('/inny', function(req, res) {
	res.send('Witaj w inny');
	console.log('Wyświetlono stronę /inny');
});

app.listen(9001, function() {console.log('aplikacja nasłuchuje na porcie 9001');});
