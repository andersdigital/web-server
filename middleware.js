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

module.exports = middleware;