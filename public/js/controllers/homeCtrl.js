angular.module('SurveyApp').controller('homeController', ['$scope','Survey',
	function($scope, Survey) {

	$scope.getSurveyQuestion = function() {
		Survey.getQuestion().then(function(res) {
			$scope.survey = res.data;
		});
	};



	$scope.submitAnswer = function() {
		console.log($scope.survey);
		Survey.submitAnswer($scope.survey).then(function(res) {
			console.log(res);
			$scope.survey = res.data;
		});
	};

}]);