(function (angular) {
  'use strict';
  angular.module('titeenilaarnio.navigation', [ 'ui.router', 'titeenilaarnio.navigation' ])
  .controller('LayoutController', function ($scope, $rootScope) {
    $scope.navigationClosed = false;
    $scope.navigationThreshold = false;

    $scope.toggleNavigation = function () {
      $scope.navigationClosed = !$scope.navigationClosed;
    };

    var mobileView = 750;

    $scope.getWidth = function () {
      return window.innerWidth;
    };

    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
      if (newValue <= mobileView) {
        $scope.navigationClosed = true;
        $scope.navigationThreshold = true;
      }
      else {
        $scope.navigationThreshold = false;
      }
    });

    window.onresize = function () {
      $scope.$apply();
    };

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromtParams) {
      if ($scope.navigationThreshold) {
        $scope.navigationClosed = true;
      }
    });
  })

  .controller('SponsorController', function ($scope, $interval) {
    var baseUrl = '/assets/';

    $scope.logos = [
      { name: 'vincit', url: baseUrl + 'vincit.png' },
      { name: 'eatech', url: baseUrl + 'eatech.png' },
      { name: 'wapice', url: baseUrl + 'wapice.png' },
      { name: 'mfiles', url: baseUrl + 'mfiles.png' },
    ];
    
    var x = Math.floor(Math.random() * $scope.logos.length);
    $scope.showLogo = $scope.logos[x];

    $interval(function () {
      x++;
      
      if (x === $scope.logos.length) {
        x = 0;
      }

      $scope.showLogo = $scope.logos[x];
    }, 5000);
  });
}(angular));
