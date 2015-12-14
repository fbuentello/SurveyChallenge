angular.module('SurveyApp').factory('Auth', ['$location', '$rootScope','$http', function($location, $rootScope, $http) {

	var Auth = {

		login: function(user, callback) {
			$http.post('/api/login', user).then(function(response) {
				console.log(user);
				if (response.data) {
					Auth.storeToken(response.data.usertoken, true);
				}
				callback(response.data.user);
			}).catch(function(err) {
				callback(null,err);
			});
		},
		storeToken: function(token, isAdmin) {
			if(isAdmin) {
				localStorage.adminToken = angular.toJson(token);
			} else {
				localStorage.userData = angular.toJson(token);
			}
		},
		getToken: function(isAdmin) {
			if(isAdmin) {
				return localStorage.adminToken;
			} else {
				return localStorage.userData;
			}

		},
		removeToken: function() {
			localStorage.removeItem('userData');
			localStorage.removeItem('adminToken');
		},
		logOut: function() {
			Auth.removeToken();
			return Auth.currentUser();
		},

		currentUser: function() {
			return angular.fromJson(localStorage.adminToken);
		}
	};

	return Auth;
}]);