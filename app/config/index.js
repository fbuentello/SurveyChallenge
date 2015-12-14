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
		Question: Question
			// add your other models here
	};

	// global.db.Question.belongsTo(global.db.User);
}

module.exports = global.db