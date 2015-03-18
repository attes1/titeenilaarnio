(function (angular) {
  'use strict';
  angular.module('titeenilaarnio.account', [ 'ui.router', 'titeenilaarnio.account' ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('titeenilaarnio.login', {
      url: 'login',
      views: {
        'main@': {
          templateUrl: 'account/login.html'
        }
      }
    });
  });
}(angular));
