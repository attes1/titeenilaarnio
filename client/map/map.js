(function (angular) {
  'use strict';
  angular.module('titeenilaarnio.map', [ 'uiGmapgoogle-maps', 'ui.router', 'titeenilaarnio.map' ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('titeenilaarnio.map', {
      url: 'map',
      views: {
        'main@': {
          templateUrl: 'map/map.html'
        }
      }
    })
  }).controller('MapController', function($scope) {
    $scope.options = { scrollwheel: true }
    $scope.points =
    [{
      id: "tite",
      title: "TiTe",
      text: "Kaikille samat säännöt.",
      icon: "/assets/icons/tite.png",
      show: false,
      coords: {
        latitude: 61.4498286,
        longitude: 23.8572004
      }
    },
    {
      id: "kyla",
      title: "Kisakylä",
      text: "Sattuu ja tapahtuu.",
      icon: "/assets/icons/skull33.png",
      show: false,
      coords: {
        latitude: 61.4505921,
        longitude: 23.864358
      }
    },
    {
      id: "bommari",
      title: "Bommari",
      text: "Nuku hyvin.",
      icon: "/assets/icons/bed33.png",
      show: false,
      coords: {
        latitude: 61.450872,
        longitude: 23.862116
      }
    },
    {
      id: "edison",
      title: "Juvenes ravintola Edison",
      text: "",
      icon: "/assets/icons/restaurant1.png",
      show: false,
      coords: {
        latitude: 61.450360,
        longitude: 23.859109
      }
    },
    {
      id: "kapina",
      title: "Pub Kultainen Apina",
      text: "",
      icon: "/assets/icons/beer34.png",
      show: false,
      coords: {
        latitude: 61.451809,
        longitude: 23.847927
      }
    },
    {
      id: "pizza",
      title: "Pizzamestat",
      text: "",
      icon: "/assets/icons/pizza3.png",
      show: false,
      coords: {
        latitude: 61.451553,
        longitude: 23.848402
      }
    },
    {
      id: "duo",
      title: "Kauppa&Keskus Duo",
      text: "",
      icon: "/assets/icons/marker20.png",
      show: false,
      coords: {
        latitude: 61.450929,
        longitude: 23.850892
      }
    },
    {
      id: "alko",
      title: "Systembolaget",
      text: "Sauli Anto, Systembolaget ei.",
      icon: "/assets/icons/dark45.png",
      show: false,
      coords: {
        latitude: 61.451236,
        longitude: 23.852270
      }
    },
    {
      id: "grilli",
      title: "Herwood Grilli",
      text: "",
      icon: "/assets/icons/fastfood1.png",
      show: false,
      coords: {
        latitude: 61.450141,
        longitude: 23.849697
      }
    }
    ]
    var showing = null;
    $scope.map = { center: { latitude: 61.450650, longitude: 23.855030 }, zoom: 16, markers: $scope.points }
    function onMarkerClicked(marker) {
      if(showing){
        var tohide = _.filter($scope.map.markers,function(x){if(x.id == showing) {return true} return false})[0]
        tohide.show = false
      }
      _.each($scope.map.markers, function(tohide) {
        tohide.show = false
      })
      showing = marker.id
      marker.show = true
      $scope.$apply()
    }
    _.each($scope.map.markers, function(amarker) {
      amarker.onClicked = function() {
        onMarkerClicked(amarker)
      };
    });
  }).directive('resize', function ($window) {
    return function (scope, element, attr) {

        var w = angular.element($window);
        scope.$watch(function () {
            return {
                'h': window.innerHeight, 
                'w': window.innerWidth
            };
        }, function (newValue, oldValue) {
            scope.windowHeight = newValue.h;
            scope.windowWidth = newValue.w;
            scope.resizeWithOffset = function (offsetH) {
                scope.$eval(attr.notifier);
                return { 
                    'height': (newValue.h - offsetH) + 'px'                    
                };
            };

        }, true);

        w.bind('resize', function () {
            scope.$apply();
        });
    }
}); 
}(angular));
