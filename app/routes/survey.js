module.exports = function(app) {

	var survey = require('../controllers/survey.controller');

	app.get('/api/survey/all', survey.getAll);
	app.get('/api/survey', survey.getOne);

	app.post('/api/survey/submit', survey.submit);
	app.post('/api/survey', survey.create);
}