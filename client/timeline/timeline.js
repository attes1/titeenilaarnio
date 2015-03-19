(function (angular) {
  'use strict';
  angular.module('titeenilaarnio.timeline', [ 'ui.router', 'titeenilaarnio.timeline' ])
    .config(function ($stateProvider) {
      $stateProvider
      .state('titeenilaarnio.timeline', {
        url: 'timeline',
        views: {
          'main@': {
            templateUrl: 'timeline/timeline.html',
            controller: 'TimelineController'
          }
        }
    });
  })

  .controller('TimelineController', function ($scope) {
    $scope.eventsFriday = [
      { time: '16:00', description: 'Majoitus aukeaa', placeId: 'majoitus', placeIcon: 'bed33.png'},
      { time: '18:00', description: 'Gaala Bommarissa', placeId: 'majoitus', placeIcon: 'bed33.png'},
      { time: '18:00', description: 'Vaihtoehtoviihdettä Teekkarisaunalla', placeId: 'sauna', placeIcon: 'couple54.png'},
      { time: '22:00', description: 'Jatkot Cupolassa', placeId: 'cupola', placeIcon: 'discjockey.png'}
    ];
    $scope.eventsSaturday = [
      { time: '10:30', description: 'Aamupala Teekkarisaunalla', placeId: 'sauna', placeIcon: 'couple54.png'},
      { time: '11:00', description: '1. laji Teekkarisaunalla', placeId: 'sauna', placeIcon: 'couple54.png'},
      { time: '13:00', description: '2. laji kisakylässä', placeId: 'kyla', placeIcon: 'skull33.png'},
      { time: '14:30', description: '3. laji kisakylässä', placeId: 'kyla', placeIcon: 'skull33.png'},
      { time: '16:00', description: '4. laji kisakylässä', placeId: 'kyla', placeIcon: 'skull33.png'},
      { time: '18:15', description: '5. laji kisakylässä', placeId: 'kyla', placeIcon: 'skull33.png'},
      { time: '19:00', description: 'Herwantapeli Cinolassa', placeId: 'cinola', placeIcon: 'mustache13.png'},
      { time: '20:30', description: 'Voitonjuhlat Teekkarisaunalla', placeId: 'sauna', placeIcon: 'couple54.png'}
    ];
    $scope.eventsSunday = [
      { time: '11:00', description: 'Majoitus tyhjänä', placeId: 'majoitus', placeIcon: 'bed33.png'  }
    ];
  });
}(angular));

