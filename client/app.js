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
    'titeenilaarnio.map',
    'titeenilaarnio.robocode',
    'titeenilaarnio.timeline', ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('titeenilaarnio', {
      url: '/',
      abstract: true,
    });

    $urlRouterProvider.otherwise('/main');
  })

  .run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeSuccess', function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  })})
}(angular));



