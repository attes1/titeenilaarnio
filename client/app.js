(function (angular) {
  'use strict';
  angular.module('titeenilaarnio', [
    'ngFx',
    'ngTouch',
    'ui.router', 

    'titeenilaarnio.main' ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/titeenilaarnio/main');

    $stateProvider
      .state('titeenilaarnio', {
        url: '/titeenilaarnio',
        abstract: true,
        template: '<ui-view></ui-view>'
      });
  });
}(angular));



