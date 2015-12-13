module.exports = function(app) {

	var db = require('../models');

	app.get('/', function(req, res) {
		db.User.findAll({
			limit: 10
		}).then(function(users) {
			res.send(users);
		})
	});
}