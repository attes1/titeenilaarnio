(function (angular) {
  'use strict';
  angular.module('titeenilaarnio.main', [ 'ui.router', 'titeenilaarnio.main' ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('titeenilaarnio.main', {
      url: '/main',
      templateUrl: 'main/main.html'
    })
  });
}(angular));
