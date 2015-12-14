// question Controller
var config = require('../config');
var Question = config.Question;
var Session = config.Session;
var sequelize = config.sequelize;
var jwt = require('jsonwebtoken');
var _ = require('underscore');

var decodedToken = function(token) {
	if (token.indexOf('"') >= 0){
		token = token.replace(/"/g,'');
	}
	return jwt.verify(token, config.development.serverKey);
}
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
			res.send(question);
		})
};

exports.getOne = function(req, res, next) {
	var token = decodedToken(req.headers.usertoken);
	Session.findAll({
		where:{session:token.session},
		attributes: ['QuestionId']
	})
	.then(function(sessions) {

		var ids = _.compact(_.uniq(_.pluck(sessions, 'QuestionId'))).toString();
		var questionIDs = "("+ids+")";
		var whereClause = (questionIDs !=='()')? 'WHERE questions.id NOT IN '+ questionIDs : '';
		console.log(questionIDs);

		var secondQuery = 'SELECT * FROM questions '+whereClause+' GROUP BY questions.id order BY RAND() LIMIT 1';
		console.log('secondQuery: ',secondQuery);
		sequelize.query(secondQuery, {
				type: sequelize.QueryTypes.SELECT
			}).then(function(questions) {
				if(!questions.length) {
					console.log('ARRAY IS EMPTY!');
					return res.status(404).send({error:'No more questions available'});
				}
				question = questions[0];
				var returnQuestion = {
					id: question.id,
					question: question.question,
					answers: _.compact([
						question.answer1,
						question.answer2,
						question.answer3,
						question.answer4
					]),
					usertoken: req.headers.usertoken.replace(/"/g,'')
				};
				res.send(returnQuestion);
			});
	});
};


exports.getAll = function(req, res, next) {
	Question.findAll().then(function(questions) {
		res.send(questions);
	})
};


exports.submitAnswer = function(req, res, next) {
	var submitted = req.body, token = req.headers.usertoken;
	var decoded = decodedToken(token);

	Question.findById(submitted.id).then(function(question) {
		return question.increment(submitted.selectedAnswer, {
			by: 1
		})
	}).then(function(updatedQuestion) {
		return Session.create({session:decoded.session}).then(function(session) {
			updatedQuestion.addSession(session);
			console.log('updatedQuestion',updatedQuestion);
			setTimeout( function() {
				next();
			}, 500 );

		})

	}).catch(function (err) {
		return res.status(404).send({error:'Error while submitting answer'});
	});

};