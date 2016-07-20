'use strict';

angular.module('myApp.hintsHardware', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/hintsHardware', {
        templateUrl: 'hintsHardware/hintsHardware.html',
        controller: 'hintsHardwareCtrl'
    });
}])

.controller('hintsHardwareCtrl', [function () {

}]);
