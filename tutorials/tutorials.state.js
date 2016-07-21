'use strict';

angular.module('myApp.tutorials', [
    'ngRoute',
    'myApp.turoials.android',
    'myApp.turoials.cssHtml',
    'myApp.turoials.java',
    'myApp.turoials.memrise',
    'myApp.turoials.web'
])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/tutorials', {
        templateUrl: 'tutorials/tutorials.html',
        controller: 'tutorialsCtrl'
    });
}])

.controller('tutorialsCtrl', [function () {

}]);
