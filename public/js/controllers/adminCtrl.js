angular.module('SurveyApp').controller('adminController', ['$scope','Survey',
	function($scope, Survey) {

	$scope.init = function() {
		$scope.newQuestion = {
			question: 'What is your favorite scary movie?',
			answers: {
				a: 'Scary Movie',
				b: 'Halloween',
				c: 'Friday the 13th',
				d: 'Nightmare on Elm Street'
			}
		};

		Survey.getAllQuestion().then(function(res) {
			console.log(res.data);
			$scope.adminQuestions = res.data;
		});
	};

	$scope.create = function(newQuestion) {
		Survey.createQuestion($scope.newQuestion).then(function(res) {
			console.log(res);
			$scope.newQuestion = res.data;
		});
	}
}]);