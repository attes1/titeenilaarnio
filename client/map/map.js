(function (angular) {
  'use strict';
  angular.module('titeenilaarnio.map', [ 'ui.router', 'titeenilaarnio.map' ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('titeenilaarnio.map', {
      url: 'map',
      views: {
        'main@': {
          templateUrl: 'map/map.html'
        }
      }
    })
  });
}(angular));
