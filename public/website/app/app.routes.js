angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'website/app/views/pages/home.html',
			controller : 'productController',
			controllerAs: 'product'
		})		
		.otherwise({
			redirectTo: '/'
		})
	$locationProvider.html5Mode(true);

});
