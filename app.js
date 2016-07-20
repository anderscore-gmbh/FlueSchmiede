'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.introduction',
  'myApp.hintsHardware',
  'myApp.questions',
  'myApp.tutor',
  'myApp.tutorials',
  'myApp.whichTut',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({
        redirectTo: '/introduction'
    });
}]);
