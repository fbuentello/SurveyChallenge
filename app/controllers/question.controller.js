// question Controller
var config = require('../config');
var Question = config.Question;
var sequelize = config.sequelize;

exports.create = function(req, res, next) {

	var obj = req.body;
	console.log(obj.answers);
	Question
		.findOrCreate({
			where: {
				question: obj.question
			},
			defaults: {
				'answer1': obj.answers.a,
				'answer2': obj.answers.b,
				'answer3': obj.answers.c,
				'answer4': obj.answers.d,
				'answer1Count': 0,
				'answer2Count': 0,
				'answer3Count': 0,
				'answer4Count': 0
			}
		})
		.spread(function(question, created) {
			// console.log('question = ',question);
			// console.log('created = ',created);
			res.send(question);
		})
};

exports.getOne = function(req, res, next) {

	sequelize.query("SELECT * FROM `questions` ORDER BY RAND() LIMIT 1", {
			type: sequelize.QueryTypes.SELECT
		}).then(function(question) {
			question = question[0];
			console.log('findOne',question);
			var returnQuestion = {
				id: question.id,
				question: question.question,
				answers: [
					question.answer1,
					question.answer2,
					question.answer3,
					question.answer4
				]
			};
			res.send(returnQuestion);
		});
};


exports.getAll = function(req, res, next) {

	console.log('api/question was called');

	Question.findAll().then(function(questions) {
		res.send(questions);
	})
};


exports.submitAnswer = function(req, res, next) {
	var submitted = req.body;

	Question.findById(submitted.id).then(function(question) {
		return question.increment(submitted.selectedAnswer, {
			by: 1
		})
	}).then(function(updatedQuestion) {
		console.log(updatedQuestion[submitted.selectedAnswer]);
		next();
	}).catch(function (err) {
		return res.status(404).send({error:'Error while submitting answer'});
	});

};