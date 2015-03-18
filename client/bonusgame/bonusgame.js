(function (angular) {
  'use strict';
  angular.module('titeenilaarnio.bonusgame', [ 'ui.router', 'geolocation', 'titeenilaarnio.bonusgame' ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('titeenilaarnio.bonusgame', {
      url: 'bonusgame',
      views: {
        'main@': {
          templateUrl: 'bonusgame/bonusgame.html',
          controller: 'BonusGameController'
        }
      }
    })

    .state('titeenilaarnio.location', {
      url: 'location',
      views: {
        'main@': {
          template: '{{ currentLocation }}',
          controller: 'BonusGameController'
        }
      }
    });
  })

  .controller('BonusGameController', function ($scope, $interval, geolocation) {
    var toRadians = function (x) {
      return x * Math.PI / 180;
    };

    var calculateDistance = function (lat1, lon1, lat2, lon2) {
      var R = 6371000;
      var φ1 = toRadians(lat1);
      var φ2 = toRadians(lat2);
      var Δφ = toRadians(lat2 - lat1);
      var Δλ = toRadians(lon2 - lon1);

      var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ/2) * Math.sin(Δλ/2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

      var d = R * c;
    };

    var locations = [
      { lat: 61.44858871, lon: 23.85798343 },
      { lat: 61.4483938, lon: 23.8578118 },
      { lat: 61.44834009, lon: 23.8577371 },
      { lat: 61.4483013, lon: 23.85780036 }
    ];

    var thresholds = [ 2, 5, 10, 15, 20, 25 ];

    var radar = undefined;

    var radarTick = function () {
      console.log('tick');

      geolocation.getLocation().then(
        function (response) {
          var nearest = _.min(locations, function (location) {
            location.distance = calculateDistance(response.coords.latitude, response.coords.longitude, location.lat, location.lon);
            return location.distance;
          });

          var i = _.findIndex(thresholds, function (x) {
            return nearest.distance <= x;
          });

          if (i < 0) {
            $scope.level = thresholds.length;
          }
          else {
            $scope.level = i;
          }

          console.log(response);
        },
        function (err, response) {
          $scope.level = thresholds.length;

          console.log(response);
        }
      );
    };

    var startRadar = function () {
      console.log('foo');

      if (angular.isDefined(radar)) {
        return;
      }

      console.log('radar started');

      radar = $interval(radarTick, 1000);
    };

    var stopRadar = function () {
      if (angular.isDefined(radar)) {
        $interval.cancel(radar);
        radar = undefined;
      }
    };

    $scope.radarOn = false;

    $scope.toggleRadar = function () {
      $scope.radarOn = !$scope.radarOn;

      if ($scope.radarOn) {
        startRadar();
      }
      else {
        stopRadar();
      }
    };

    // For debuging
    $scope.currentLocation = null;
    geolocation.getLocation().then(function (response) {
      $scope.currentLocation = response.coords.latitude + ' / ' + response.coords.longitude;
    });
  });
}(angular));
