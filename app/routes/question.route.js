
// question Route
module.exports = function(app) {


	var Auth = require('../config/auth');
	var question = require('../controllers/question.controller');

	app.get('/api/question/all', Auth.UserToken, question.getAll);
	app.get('/api/question', Auth.tokenExist, question.getOne);

	app.post('/api/question/submitAnswer', Auth.tokenExist, question.submitAnswer, question.getOne);
	app.post('/api/question', Auth.UserToken, question.create);
}