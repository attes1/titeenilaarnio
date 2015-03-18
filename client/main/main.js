(function (angular) {
  'use strict';
  angular.module('titeenilaarnio.main', [ 'ui.router', 'titeenilaarnio.main' ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('titeenilaarnio.main', {
      url: 'main',
      views: {
        'main@': {
          templateUrl: 'main/main.html'
        }
      }
    });
  });
}(angular));
