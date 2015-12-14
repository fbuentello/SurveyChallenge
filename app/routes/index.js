module.exports = function(app) {

	var defaultUser = require('../config/config').development.defaultUser;

	// Question Routes
	require('./question.route')(app);


	/* Handle Login POST */
	app.post('/api/login', function(req,res) {
		//check if req.body matches config
		var user = req.body;
		if (user) {
			if(!user.username || !user.password) {
				return res.status(404).send({error:'Missing credentials'});
			}
			if((user.username !== defaultUser.username)
				|| (user.password !== defaultUser.password)) {
				return res.status(401).send({error:'Incorrect login credentials'});
			}

			res.send({
				user: defaultUser,
				token: 'questionToken'
			});
		}

	});


	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
}