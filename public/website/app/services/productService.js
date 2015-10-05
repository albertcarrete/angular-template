angular.module('productService', [])

.factory('Product', function($http) {

	// create a new object
	var productFactory = {};

	// get all products
	productFactory.all = function() {
		return $http.get('/api/products/');
	};

	// return our entire productFactory object
	return productFactory;

});