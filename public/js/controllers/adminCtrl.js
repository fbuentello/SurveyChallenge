angular.module('SurveyApp').controller('adminController', ['$scope', 'Survey', 'Auth', '$http',
	function($scope, Survey, Auth, $http) {
		$scope.currentUser = Auth.currentUser();

		$scope.user = {
			username: '',
			password: ''
		};

		$scope.login = function(form) {
			Auth.login($scope.user, function(user, err) {

				if (err) {
					$scope.error = err.data.error;
					return console.log(err);
				}
				$scope.error = '';
				$scope.currentUser = Auth.currentUser();

				Survey.getAllQuestion().then(function(res) {
					console.log(res.data);
					$scope.adminQuestions = res.data;
				});
			});


		};

		$scope.logOut = function() {
			$scope.currentUser = Auth.logOut();
		};

		$scope.init = function() {
			$scope.newQuestion = {
				question: '',
				answers: {
					a: '',
					b: '',
					c: '',
					d: ''
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
				$scope.init();
			});
		}
	}
]);