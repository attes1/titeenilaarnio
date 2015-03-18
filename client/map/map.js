(function (angular) {
  'use strict';
  angular.module('titeenilaarnio.map', [ 'uiGmapgoogle-maps', 'ui.router', 'titeenilaarnio.map' ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('titeenilaarnio.map', {
      url: 'map/:markerId',
      views: {
        'main@': {
          templateUrl: 'map/map.html'
        }
      }
    });
  }).controller('MapController', function($scope, $stateParams) {
    $scope.options = { scrollwheel: true };
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
      text: "Pääkallopaikka. Sattuu ja tapahtuu.",
      icon: "/assets/icons/skull33.png",
      show: false,
      coords: {
        latitude: 61.4505921,
        longitude: 23.864358
      }
    },
    {
      id: "majoitus",
      title: "Majoitus",
      text: "Avoinna: la 00:00 - 11:00 su 00:00 - 11:00<br>Ei ole lepokoti.<br>Päivystys: <a href='tel:0451207348'>045 120 7348</a>",
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
      text: "Avoinna: la 11:00 - 14:00<br><br>Lihapyörykät<br>Kermainen pippurikastike<br>Lohikeitto<br>Feta-kasviskastike<br>Kuitupasta",
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
      text: "Avoinna 12:00 - 03:00<br>Karaoke kello 21:30 alkaen.",
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
      text: "Pizza Service &gt; Haitari &gt; Castello. <a href='https://pizza-online.fi/web/find/index?search_by=address&value=Insin%C3%B6%C3%B6rinkatu+30%2C+Tampere#search_results'>pizzaonline.fi</a>",
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
      text: "Avoinna: pe 08:00 - 21:00 la 09:00 - 18:00<br>K/S-market, natsisiwa, <strong>ALKO</strong>, subi, kotipizzaburger, kenkäkauppa, hammaslääkäri...",
      icon: "/assets/icons/marker20.png",
      show: false,
      coords: {
        latitude: 61.450929,
        longitude: 23.850892
      }
    },
    {
      id: "siwa",
      title: "Siwa",
      text: "Avoinna: 08:00 - 23:00",
      icon: "/assets/icons/marker20.png",
      show: false,
      coords: {
        latitude: 61.450975,
        longitude: 23.848212
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
      text: "Avoinna: ~17:00 - ~05:00",
      icon: "/assets/icons/fastfood1.png",
      show: false,
      coords: {
        latitude: 61.450141,
        longitude: 23.849697
      }
    },
    {
      id: "sauna",
      title: "Teekkarisauna",
      text: "Ei todellakaan ole lepokoti!",
      icon: "/assets/icons/couple54.png",
      show: false,
      coords: {
        latitude: 61.452716, 
        longitude: 23.859971
      }
    }];
    var showing = null;
    $scope.map = { center: { latitude: 61.450650, longitude: 23.855030 }, zoom: 16, markers: $scope.points, polygons:
      [
            {
                id: 1,
                path: [
                    {
                        latitude: 61.449709,
                        longitude: 23.856983
                    },
                    {
                        latitude: 61.450215,
                        longitude: 23.859402
                    },
                    {
                        latitude: 61.449667,
                        longitude: 23.859969
                    },
                    {
                        latitude: 61.449309,
                        longitude: 23.857251
                    }
                ],
                stroke: {
                    color: '#f00',
                    weight: 2
                },
                editable: false,
                draggable: false,
                geodesic: false,
                visible: true,
                fill: {
                    color: '#ff0000',
                    opacity: 0.5
                }
            }
        ]
      };
    $scope.myMap = {};
    $scope.showMarker = function(id) {
      _.find($scope.map.markers, function(marker) { return marker.id == id; }).show = true;
    };
    if($stateParams.markerId) {
      $scope.showMarker($stateParams.markerId);
    }
    function onMarkerClicked(marker) {
      if(showing){
        var tohide = _.filter($scope.map.markers,function(x){ return x.id == showing; })[0];
        tohide.show = false;
      }
      _.each($scope.map.markers, function(tohide) {
        tohide.show = false;
      });
      showing = marker.id;
      marker.show = true;
      $scope.$apply();
    }
    _.each($scope.map.markers, function(amarker) {
      amarker.onClicked = function() {
        onMarkerClicked(amarker);
      };
    });
    $scope.youAreHere = function() {
      navigator.geolocation.getCurrentPosition(function(response) {
        var oldpos = _.find($scope.map.markers, function(marker){ return marker.id == 'me'; });
        var acc = parseInt(response.coords.accuracy);
        var lat = response.coords.latitude;
        var lon = response.coords.longitude;
        var you = {
          id: "me",
          title: "Olet tässä",
          text: "Ainakin "+acc+" metrin tarkkuudella...",
          show: true,
          coords: {
            latitude: lat,
            longitude: lon
          }
        };
        if(oldpos) {
          oldpos.text = you.text;
          oldpos.show = true;
          oldpos.coords.latitude = lat;
          oldpos.coords.longitude = lon;
        } else {
          $scope.map.markers.push(you);
        }
        $scope.myMap.refresh();
        $scope.$apply();
      }, function() { alert('En tiedä! Onko gepsi päällä?'); }, { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 });
    };
  }).directive('resize', function ($window) {
    return function ($scope, element, attr) {

        var w = angular.element($window);
        $scope.$watch(function () {
            return {
                'h': window.innerHeight, 
                'w': window.innerWidth
            };
        }, function (newValue, oldValue) {
            $scope.windowHeight = newValue.h;
            $scope.windowWidth = newValue.w;
            $scope.resizeWithOffset = function (offsetH) {
                $scope.$eval(attr.notifier);
                return { 
                    'height': (newValue.h - offsetH) + 'px'
                };
            };

        }, true);

        w.bind('resize', function () {
            $scope.myMap.refresh();
            $scope.$apply();
        });
    };
}); 
}(angular));
