angular.module('SurveyApp').factory('Survey', ['$http','Auth', function($http,Auth) {
	var config = function(isAdmin) {
		return {
			headers: {
				usertoken: Auth.getToken(isAdmin)
			}
		};
	};

	return {
		getQuestion: function() {
			return $http.get('/api/question', config());
		},
		getAllQuestion: function() {
			return $http.get('/api/question/all', config(true));
		},
		createQuestion: function(question) {
			return $http.post('/api/question', question, config(true));
		},
		submitAnswer: function(questionData) {
			return $http.post('/api/question/submitAnswer', questionData, config());
		}
	}
}]);