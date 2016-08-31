var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('Private Route Hit!');
	},
	logger: function (req, res, next) {
		new Date().toString()
		console.log('Request: ' + new Date().toString() + ' ' + req.method);
		next();
	}
};

app.use(middleware.logger);

app.get('/about', function (req, res) {
	res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));
// console.log(__dirname);
app.listen(PORT, function () {
	console.log('Express Server Started on port ' + PORT);
});