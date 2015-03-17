(function (angular) {
  "use strict";
  angular.module('titeenilaarnio.main', [ 'ui.router', 'titeenilaarnio.main' ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('titeenilaarnio.main', {
        url: '/main',
        abstract: true,
        templateUrl: 'main/main.tpl.html'
      });
  });
}(angular));
