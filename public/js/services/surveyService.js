angular.module('SurveyApp').factory('Survey', ['$http',function($http) {
		return {
			getQuestion : function() {
				return $http.get('/api/survey');
			},
			getAllQuestion : function() {
				return $http.get('/api/survey/all');
			},
			createQuestion : function(question) {
				return $http.post('/api/survey', question);
			},
			submitAnswer : function(surveyData) {
				return $http.post('/api/survey/submitAnswer', surveyData);
			}
		}
	}]);