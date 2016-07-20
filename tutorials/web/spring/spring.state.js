'use strict';

angular.module('myApp.tutorials', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/tutorials', {
        templateUrl: 'tutorials/tutorials.html',
        controller: 'tutorialsCtrl'
    });
}])

.controller('tutorialsCtrl', [function () {

}]);
