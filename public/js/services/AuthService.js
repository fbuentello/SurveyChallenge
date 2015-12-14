angular.module('SurveyApp').factory('Auth', ['$location', '$rootScope','$http', function($location, $rootScope, $http) {

	return {

		login: function(user, callback) {
			$http.post('/api/login', user).then(function(response) {
				console.log(user);
				if (response.data) {
					localStorage.userData = angular.toJson(response.data);
				}
				callback(response.data.user);
			});
		},

		logOut: function() {
			localStorage.userData = null;
			return this.currentUser();
		},

		currentUser: function() {
			return angular.fromJson(localStorage.userData);
		}
	};
}]);