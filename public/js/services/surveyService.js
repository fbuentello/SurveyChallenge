angular.module('SurveyApp').factory('Survey', ['$http',function($http) {
		return {
			getQuestion : function() {
				return $http.get('/api/question');
			},
			getAllQuestion : function() {
				return $http.get('/api/question/all');
			},
			createQuestion : function(question) {
				return $http.post('/api/question', question);
			},
			submitAnswer : function(questionData) {
				return $http.post('/api/question/submitAnswer', questionData);
			}
		}
	}]);