// question Route
module.exports = function(app) {

	var question = require('../controllers/question.controller');

	app.get('/api/question/all', question.getAll);
	app.get('/api/question', question.getOne);

	app.post('/api/question/submitAnswer', question.submitAnswer,question.getOne);
	app.post('/api/question', question.create);
}