angular.module('app', [
	'ngAnimate', 'app.routes',
	'templateCtrl', 'productCtrl',
	'templateService','productService'
])

// application configuration to integrate token into requests
.config(function($httpProvider) {

	// attach our auth interceptor to the http requests
	// $httpProvider.interceptors.push('AuthInterceptor');

});