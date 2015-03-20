(function (angular) {
  'use strict';
  angular.module('titeenilaarnio.scoreboard', [ 'ui.router', 'titeenilaarnio.scoreboard' ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('titeenilaarnio.scoreboard', {
      url: 'scoreboard',
      views: {
        'main@': {
          templateUrl: 'scoreboard/scoreboard.html',
          controller: 'ScoreboardController'
        }
      }
    });
  })

  .controller('ScoreboardController', function ($scope, $http) {
    $scope.guilds = undefined;

    $http.get('/api/guilds')
      .success(function (response) {
        $scope.guilds = response;
        _.forEach($scope.guilds, function (g) {
          var robin = _.pluck(g.scores, 'score');
          g.total = _.reduce(robin, function (sum, n) {
            return sum + n;
          });

          if (!g.total) {
            g.total = 0;
          }
        });
    });
  });
}(angular));
