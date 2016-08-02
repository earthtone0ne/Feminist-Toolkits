app.config(function ($stateProvider) {
    $stateProvider.state('updateProduct', {
        url: '/update-product/:id',
        templateUrl: 'js/update-product/update-product.html',
        controller: 'UpdateProductController',
        resolve: {
        	productBundle: function($stateParams,ProductsFactory){
        		return ProductsFactory.fetchById($stateParams.id);
        	}
        }
    });
});


app.controller('UpdateProductController', function ($scope, productBundle,$stateParams) {
	if($stateParams.id){
		$scope.product=productBundle.product;
		$scope.categories=productBundle.categories;
		$scope.currPhotoUrl=$scope.product.photoUrl;
	}
	$scope.updateCurrPhoto=function(url){
		$scope.currPhotoUrl=url;
	}

});