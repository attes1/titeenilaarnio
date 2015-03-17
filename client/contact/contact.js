(function (angular) {
  'use strict';
  angular.module('titeenilaarnio.contact', [ 'ui.router', 'titeenilaarnio.contact' ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('titeenilaarnio.contact', {
      url: 'contact',
      views: {
        'main@': {
          templateUrl: 'contact/contact.html'
        }
      }
    })
  });
}(angular));
