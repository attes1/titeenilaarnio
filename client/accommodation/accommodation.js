(function (angular) {
  'use strict';
  angular.module('titeenilaarnio.accommodation', [ 'ui.router', 'titeenilaarnio.accommodation' ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('titeenilaarnio.accommodation', {
      url: 'accommodation',
      views: {
        'main@': {
          templateUrl: 'accommodation/accommodation.html'
        }
      }
    })
  });
}(angular));
