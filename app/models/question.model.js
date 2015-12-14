// Question Model
module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Question", {
	question: {
		type: DataTypes.TEXT,
		allowNull: false
	},
	answer1: {
		type: DataTypes.TEXT,
		allowNull: false
	},
	answer2: {
		type: DataTypes.TEXT,
		allowNull: false
	},
	answer3: {
		type: DataTypes.TEXT,
		allowNull: true
	},
	answer4: {
		type: DataTypes.TEXT,
		allowNull: true
	},
	answer1Count: {
		type:DataTypes.INTEGER,
		defaultValue: 0,
	},
	answer2Count: {
		type:DataTypes.INTEGER,
		defaultValue: 0,
	},
	answer3Count: {
		type:DataTypes.INTEGER,
		defaultValue: 0,
	},
	answer4Count: {
		type:DataTypes.INTEGER,
		defaultValue: 0,
	}
  });
};