angular.module('productCtrl', ['productService'])

.controller('productController', function(Product) {

	var vm = this;
	vm.processing = true;

	Product.all()
		.success(function(data) {

			// bind the products that come back to vm.products
			vm.products = data;
			// when all the products come back, set processing to false
			vm.processing = false;

			console.log(vm.products);

		});	

});
