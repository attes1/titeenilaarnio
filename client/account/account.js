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
      })

      .state('titeenilaarnio.registration', {
        url: 'registration',
        views: {
          'main@': {
            templateUrl: 'account/registration.html'
          }
        }
      });
  })

  .controller('LoginController', function ($scope) {

  })

  .controller('RegistrationController', function ($scope) {
    
  });
}(angular));
