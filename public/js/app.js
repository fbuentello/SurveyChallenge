angular.module('SurveyApp',['ngRoute'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'homeController'
		})

		.when('/admin', {
			templateUrl: 'views/admin.html',
			controller: 'adminController'
		});

	$locationProvider.html5Mode(true);

}]);