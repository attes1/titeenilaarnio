(function (angular) {
  'use strict';
  angular.module('titeenilaarnio.contact', [ 'ui.router', 'titeenilaarnio.contact' ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('titeenilaarnio.contact', {
      url: 'contact',
      views: {
        'main@': {
          templateUrl: 'contact/contact.html',
          controller: 'ContactController'
        }
      }
    })
  })

  .controller('ContactController', function ($scope) {
    $scope.organizers = [
      { nick: 'Maska', realName: 'Masi Kajander', phone: '0407574713', title: 'Päävastaava' },
      { nick: 'spott', realName: 'Atte Saarinen', phone: '0442706007', title: 'Päävaravastaava' },
      { nick: 'kaisapais', realName: 'Kaisa Liimatainen', phone: '0405227755', title: 'Vaihtoehtoviihde' },
      { nick: 'kebbish', realName: 'Akseli Karvinen', phone: '0409634416', title: 'Gaala' },
      { nick: 'SoliDii', realName: 'Miika Heinonen', phone: '0400561603', title: 'Yritysyhteistyö' },
      { nick: 'Donaldi', realName: 'Aku Niskanen', phone: '0503725075', title: 'Media' },
      { nick: 'cirrus~', realName: 'Panu Kortelainen', phone: '0505020703', title: 'Sauna' },
      { nick: 'Pilkki', realName: 'Ossi Hakkarainen', phone: '0509111360', title: 'ATK' },
      { nick: 'Dregu', realName: 'Ville Nousiainen', phone: '0505218585', title: 'ATK' },
      { nick: 'tilde', realName: 'Noora Männikkö', phone: '0504659865', title: 'Yritysyhteistyö' },
      { nick: 'shiona', realName: 'Juho Jokelainen', phone: '0400201258', title: 'Tekniikka' },
      { nick: 'Veli-V', realName: 'Janne Väisänen', phone: '0503802076', title: 'Rakennusmestari' },
      { nick: 'laarnio', realName: 'Henrik Hartiala', phone: '0408455132', title: 'Gaala' },
      { nick: 'Querr', realName: 'Veera Kansikas', phone: '0404137271', title: 'Majoitus' }
    ];
  });
}(angular));
