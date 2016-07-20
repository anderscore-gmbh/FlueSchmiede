'use strict';

angular.module('myApp.memrise', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/memrise', {
        templateUrl: 'memrise/memrise.html',
        controller: 'memriseCtrl'
    });
}])

.controller('memriseCtrl', [function () {

}]);
