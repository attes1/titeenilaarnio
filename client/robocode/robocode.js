(function (angular) {
  'use strict';
  angular.module('titeenilaarnio.robocode', [ 'ui.router', 'titeenilaarnio.robocode' ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('titeenilaarnio.robocode', {
      url: 'main',
      views: {
        'main@': {
          templateUrl: 'robocode/robocode.html'
        }
      }
    });
  });
}(angular));
