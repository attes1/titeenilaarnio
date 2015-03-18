(function (angular) {
  'use strict';
  angular.module('titeenilaarnio.map', [ 'ui.router', 'titeenilaarnio.map', 'uiGmapgoogle-maps' ])
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
    $scope.map = { center: { latitude: 61.450650, longitude: 23.855030 }, zoom: 16 }
    $scope.options = { scrollwheel: true }
    $scope.markers =
    [{
      id: "tite",
      title: "TiTe",
      text: "Kaikille samat säännöt.",
      icon: "/assets/icons/tite.png",
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
      coords: {
        latitude: 61.450141,
        longitude: 23.849697
      }
    }
    ];
  })
}(angular));
