var app = angular.module('myApp', []);

app.controller('Controller', ['$scope', '$timeout',  function($scope, $timeout) {
    $scope.prefilled = 'https://blog.codepen.io/wp-content/uploads/2012/06/Black-Small.png'
    $scope.logourl = $scope.logourl || $scope.prefilled
    $timeout(function() {
      // alert('changed')
      $scope.prefilled = 'https://blog.codepen.io/wp-content/uploads/2012/06/Black-Small.png'
    }, 2000)
}])

angular.module('datepickerBasicUsage', ['ngMaterial', 'ngMessages']).controller('AppCtrl', function() {
  this.myDate = new Date();
  this.isOpen = false;
});
