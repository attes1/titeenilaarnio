(function (angular) {
  'use strict';
  angular.module('titeenilaarnio.bonusgame', [ 'ui.router', 'titeenilaarnio.bonusgame' ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('titeenilaarnio.bonusgame', {
      url: 'bonusgame',
      views: {
        'main@': {
          templateUrl: 'bonusgame/bonusgame.html'
        }
      }
    })
  });
}(angular));
