app.config(function ($stateProvider) {

  $stateProvider.state('reviews', {
      url: '/products/:productId/reviews',
      controller: 'ReviewsController',
      templateUrl: '/js/reviews/reviews.html',
      resolve: {
        reviews: function (ReviewsFactory, $stateParams) {
          return ReviewsFactory.fetchAll($stateParams.productId);
        }
      }
  });

});

app.controller('ReviewsController', function ($scope, reviews) {

  $scope.reviews = reviews;
});
