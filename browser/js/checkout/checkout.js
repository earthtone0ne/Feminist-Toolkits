app.config(function ($stateProvider) {
    $stateProvider.state('checkout', {
        url: '/checkout/:items/:number/:total',
        controller: 'CheckoutController',
        templateUrl: 'js/checkout/checkout.html'
    });

});

app.controller('CheckoutController', function ($scope,$rootScope,$stateParams,OrdersFactory) {
	$scope.items=JSON.parse($stateParams.items);
	$scope.items.number=$stateParams.number;
	$scope.items.total=$stateParams.total;
	$scope.items.ids=$scope.items.map(function(item){
		return item.id;
	})
	console.log($scope.items.ids);
	$scope.$on('$stateChangeStart', function (event, next, current) {
	    $rootScope.$broadcast('backToShopping');
	});
	$scope.submitOrder=function(shippingAddress,name,email){
		console.log(shippingAddress,name,email);
	}
});