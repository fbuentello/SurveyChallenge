if (!global.hasOwnProperty('db')) {
	var Sequelize = require('sequelize');
	var config = require('./config');
	var dev = config.development;
	var bCrypt = require('bcrypt-nodejs');

	var sequelize = new Sequelize(dev.host, dev.options);
	var Question = sequelize.import('../models/question.model');

	global.db = {
		Sequelize: Sequelize,
		sequelize: sequelize,
		Question: Question,
		Session: sequelize.define('Session', { session: Sequelize.STRING }),
		development: dev
	};

	global.db.Question.hasMany(global.db.Session);
	global.db.Session.belongsTo(global.db.Question);
}

module.exports = global.db