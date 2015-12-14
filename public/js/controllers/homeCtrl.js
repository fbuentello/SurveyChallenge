angular.module('SurveyApp').controller('homeController', ['$scope','Survey','Auth',
	function($scope, Survey, Auth) {
	$scope.error = true;
	$scope.getSurveyQuestion = function() {
		Survey.getQuestion().then(function(res) {
			Auth.storeToken(res.data.usertoken);
			$scope.survey = res.data;
			$scope.error = false;
			$scope.errorMsg = '';
		}).catch(function(err) {
			$scope.survey = false;
			$scope.error = true;
			$scope.errorMsg = err.data.error;
		});
	};

	$scope.submitAnswer = function() {
		console.log($scope.survey);
		Survey.submitAnswer($scope.survey).then(function(res) {
			Auth.storeToken(res.data.usertoken);
			console.log(res);
			$scope.survey = res.data;
		}).catch(function(err) {
			$scope.survey = false;
			$scope.error = true;
			$scope.errorMsg = err.data.error;
		});
	};

}]);