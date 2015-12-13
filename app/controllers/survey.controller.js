
var db = require('../config');

exports.create = function(req, res, next) {
	var question = req.body;
	console.log(question);
	res.send(question);
};

exports.getOne = function(req, res, next) {

	console.log('api/survey was called');
		var obj = {
			question: 'Random quasdfasdestion goes here!',
			answers: [
				'Answer 1',
				'Answer 2',
				'Answer 3',
				'Answer 4'
				]
		};

		res.send(obj);
};


exports.getAll = function(req, res, next) {

	console.log('api/survey was called');
		var questions = [
				{
					question: 'Random quasdfasdestion goes here!',
					answers: [
						'Answer 1',
						'Answer 2',
						'Answer 3',
						'Answer 4'
						]
				},
				{
					question: 'Random quasdfasdestion goes here!',
					answers: [
						'Answer 1',
						'Answer 2',
						'Answer 3',
						'Answer 4'
						]
				},
				{
					question: 'Random quasdfasdestion goes here!',
					answers: [
						'Answer 1',
						'Answer 2',
						'Answer 3',
						'Answer 4'
						]
				},
				{
					question: 'Random quasdfasdestion goes here!',
					answers: [
						'Answer 1',
						'Answer 2',
						'Answer 4'
						]
				},
				{
					question: 'Random quasdfasdestion goes here!',
					answers: [
						'Answer 1',
						'Answer 2',
						'Answer 3',
						'Answer 4'
						]
				}];

		res.send(questions);
};


exports.submit = function(req, res, next) {
	var question = req.body;
	console.log('submit',question);
	question.selectedAnswer = null;
	res.send(question);
};