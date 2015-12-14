var jwt = require('jsonwebtoken');
var config = require('../config/').development;
var defaultUser = config.defaultUser;

module.exports = function(app) {

	// Question Routes
	require('./question.route')(app);


	/* Handle Login POST */
	app.post('/api/login', function(req, res) {
		//check if req.body matches config
		var user = req.body;
		if (user) {
			if (!user.username || !user.password) {
				return res.status(404).send({
					error: 'Missing credentials'
				});
			}
			if ((user.username !== defaultUser.username) || (user.password !== defaultUser.password)) {
				return res.status(401).send({
					error: 'Incorrect login credentials'
				});
			}

			res.send({
				user: defaultUser,
				usertoken: jwt.sign(user, config.serverKey)
			});
		}

	});


	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		// load the single view file (angular will handle the page changes on the front-end)
		res.sendfile('./public/index.html');
	});
}