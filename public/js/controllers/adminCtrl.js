angular.module('SurveyApp').controller('adminController', ['$scope', 'Survey', 'Auth', '$http',
	function($scope, Survey, Auth, $http) {
		$scope.currentUser = Auth.currentUser();

		$scope.user = {
			username: 'sumoMe',
			password: 'test'
		};

		$scope.login = function(form) {
			Auth.login($scope.user, function(user) {

				$scope.currentUser = Auth.currentUser();
				console.log('login', Auth.currentUser());
			});

		};

		$scope.logOut = function() {
			$scope.currentUser = Auth.logOut();

		};

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
				$scope.newQuestion = {};
			});
		}
	}
]);