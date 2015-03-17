(function (angular) {
  'use strict';
  angular.module('titeenilaarnio.scoreboard', [ 'ui.router', 'titeenilaarnio.scoreboard' ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('titeenilaarnio.scoreboard', {
      url: 'scoreboard',
      views: {
        'main@': {
          templateUrl: 'scoreboard/scoreboard.html'
        }
      }
    })
  });
}(angular));
