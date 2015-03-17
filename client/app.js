(function (angular) {
  'use strict';
  angular.module('titeenilaarnio', [
    'ngFx',
    'ngTouch',
    'ui.router', 

    'titeenilaarnio.navigation',
    'titeenilaarnio.main' ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('titeenilaarnio', {
      url: '/',
      abstract: true,
    })

    $urlRouterProvider.otherwise('/info');
  });
}(angular));



