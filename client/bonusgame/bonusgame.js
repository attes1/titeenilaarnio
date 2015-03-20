(function (angular) {
  'use strict';
  angular.module('titeenilaarnio.bonusgame', [ 'ui.router', 'titeenilaarnio.bonusgame' ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('titeenilaarnio.bonusgame', {
      url: 'bonusgame/:code',
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

  .controller('BonusGameController', function ($scope, $stateParams, $interval) {
    $scope.code = undefined;

    $scope.radarOn = false;
    $scope.entryCode = false;
    $scope.selectedGuild = '';

    if ($stateParams.code) {
      $scope.code = $stateParams.code;
      $scope.codeEntry = true;
      $scope.radarOn = false;
    }

    var toRadians = function (x) {
      return x * Math.PI / 180;
    };

    var calculateDistance = function (lat1, lon1, lat2, lon2) {
      var R = 6371000.0;
      var φ1 = toRadians(lat1);
      var φ2 = toRadians(lat2);
      var Δφ = toRadians(lat2 - lat1);
      var Δλ = toRadians(lon2 - lon1);

      var a = Math.sin(Δφ/2.0) * Math.sin(Δφ/2.0) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ/2.0) * Math.sin(Δλ/2.0);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

      var d = R * c;

      return d;
    };

    // Joo, nää kovakoodattiin nyt tähä, kun ei näitä voi servultakaan pollata koko ajan
    // ja ei jaksettu tehdä elegantimpaa ratkasua. Jos jaksoit tänne asti ni käytä hyväkses.

    var locations = [
      { lat: 61.45031, lon: 23.86433 },
      { lat: 61.45088, lon: 23.86195 },
      { lat: 61.4509043, lon: 23.8593568 },
      { lat: 61.45108, lon: 23.85548 },
      { lat: 61.45224, lon: 23.860496 },
      { lat: 61.450314, lon: 23.864860 }
    ];

    var thresholds = [ 5, 10, 20, 30, 40 ];

    $scope.level = thresholds.length - 1;
    $scope.accuracy = '?';

    var radar = undefined;

    var radarTick = function () {
      navigator.geolocation.getAccurateCurrentPosition(function (response) {
          $scope.accuracy = response.coords.accuracy;

          console.log(response);

          var nearest = _.min(locations, function (location) {
            location.distance = calculateDistance(response.coords.latitude, response.coords.longitude, location.lat, location.lon);
            return location.distance;
          });

          var i = _.findIndex(thresholds, function (x) {
            return nearest.distance <= x;
          });

          if (i < 0) {
            $scope.level = thresholds.length - 1;
          }
          else {
            $scope.level = i;
          }
        },
        function (err) {
          console.log(err);
        },
        function () {},
        {
          desiredAccuracy: 5, maxWait: 5000
        }
      );
    };

    var startRadar = function () {
      if (angular.isDefined(radar)) {
        return;
      }

      radar = $interval(radarTick, 1000);
    };

    var stopRadar = function () {
      if (angular.isDefined(radar)) {
        $interval.cancel(radar);
        radar = undefined;
      }
    };

    $scope.toggleRadar = function () {
      $scope.codeEntry = false;
      $scope.radarOn = !$scope.radarOn;

      if ($scope.radarOn) {
        startRadar();
      }
      else {
        stopRadar();
      }
    };

    $scope.toggleCodeEntry = function () {
      $scope.radarOn = false;
      $scope.codeEntry = !$scope.codeEntry;
    };

    $scope.setGuild = function (guild) {
      $scope.selectedGuild = guild;
      $scope.$apply();
    };

    $scope.codeValid = false;

    $scope.checkCode = function () {
      $http.post('/api/bonus', {
        guild: $scope.selectedGuild,
        qrcode: code
      }).success(function (response) {
        $scope.codeValid = true;
      });
    };
  });
}(angular));
