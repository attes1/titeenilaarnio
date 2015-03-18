(function (angular) {
  'use strict';
  angular.module('titeenilaarnio', [
    'ngFx',
    'ngTouch',
    'ui.router', 

    'titeenilaarnio.account',
    'titeenilaarnio.navigation',
    'titeenilaarnio.main',
    'titeenilaarnio.accommodation',
    'titeenilaarnio.competitions',
    'titeenilaarnio.contact',
    'titeenilaarnio.scoreboard',
    'titeenilaarnio.bonusgame',
    'titeenilaarnio.map' ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('titeenilaarnio', {
      url: '/',
      abstract: true,
    })

    $urlRouterProvider.otherwise('/main');
  });
}(angular));



