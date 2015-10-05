angular.module('templateService', [])

.factory('Template', function($http) {

	// create a new object
	var pageFactory = {};

	// Retrieve All Pages
	serviceFactory.all = function() {
		return $http.get('/api/services/');
	};
	// [get] page by ID
	serviceFactory.get = function(id) {
		return $http.get('/api/services/' + id);
	};
	// create a page
	serviceFactory.create = function(pageData) {
		return $http.post('/api/services/', pageData);
	};	
	/* Admin - Products */


	// return our entire productFactory object
	return serviceFactory;

});