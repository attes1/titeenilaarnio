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
          g.total = 0;
          g.total = _.reduce(g.scores, function (sum, value, key) {
            if (key === 'score') {
              sum = sum + value;
            }

            return sum;
          }, 0);
        });
    });
  });
}(angular));
