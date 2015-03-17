(function (angular) {
  'use strict';
  angular.module('titeenilaarnio.navigation', [ 'ui.router', 'titeenilaarnio.navigation' ])
  .controller('LayoutController', function ($scope) {
    $scope.navigationClosed = false;

    $scope.toggleNavigation = function () {
        $scope.navigationClosed = !$scope.navigationClosed;
    };

    var mobileView = 990;

    $scope.getWidth = function () {
        return window.innerWidth;
    };

    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
        if (newValue <= mobileView) {
            $scope.navigationClosed = false;
        }
    });

    window.onresize = function () {
        $scope.$apply();
    };
  });
}(angular));
