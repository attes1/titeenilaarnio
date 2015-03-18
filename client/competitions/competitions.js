(function (angular) {
  'use strict';
  angular.module('titeenilaarnio.competitions', [ 'ui.router', 'titeenilaarnio.competitions' ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('titeenilaarnio.competitions', {
      url: 'competitions',
      views: {
        'main@': {
          templateUrl: 'competitions/competitions.html'
        }
      }
    });
  });
}(angular));
