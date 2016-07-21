'use strict';

angular.module('myApp.tutorials.memrise', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/tutorials/memrise', {
        templateUrl: 'tutorials/memrise/memrise.html',
        controller: 'memriseCtrl'
    });
}])

.controller('memriseCtrl', [function () {

}]);
