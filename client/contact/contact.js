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
    });
  })

  .controller('ContactController', function ($scope) {
    $scope.organizers = [
      { nick: 'Maska', firstName: 'Masi', lastName: 'Kajander', phone: '0407574713', title: 'Päävastaava' },
      { nick: 'spott', firstName: 'Atte', lastName: 'Saarinen', phone: '0442706007', title: 'Päävaravastaava' },
      { nick: 'kaisapais', firstName: 'Kaisa', lastName: 'Liimatainen', phone: '0405227755', title: 'Vaihtoehtoviihde' },
      { nick: 'kebbish', firstName: 'Akseli', lastName: 'Karvinen', phone: '0409634416', title: 'Gaala' },
      { nick: 'SoliDii', firstName: 'Miika', lastName: 'Heinonen', phone: '0400561603', title: 'Yritysyhteistyö' },
      { nick: 'Donaldi', firstName: 'Aku', lastName: 'Niskanen', phone: '0503725075', title: 'Media' },
      { nick: 'cirrus~', firstName: 'Panu', lastName: 'Kortelainen', phone: '0505020703', title: 'Sauna' },
      { nick: 'Pilkki', firstName: 'Ossi', lastName: 'Hakkarainen', phone: '0509111360', title: 'ATK' },
      { nick: 'Dregu', firstName: 'Ville', lastName: 'Nousiainen', phone: '0505218585', title: 'ATK' },
      { nick: 'tilde', firstName: 'Noora', lastName: 'Männikkö', phone: '0504659865', title: 'Yritysyhteistyö' },
      { nick: 'shiona', firstName: 'Juho', lastName: 'Jokelainen', phone: '0400201258', title: 'Tekniikka' },
      { nick: 'Veli-V', firstName: 'Janne', lastName: 'Väisänen', phone: '0503802076', title: 'Rakennusmestari' },
      { nick: 'laarnio', firstName: 'Henrik', lastName: 'Hartiala', phone: '0408455132', title: 'Gaala' },
      { nick: 'Querr', firstName: 'Veera', lastName: 'Kansikas', phone: '0404137271', title: 'Majoitus' }
    ];
  });
}(angular));
