'use strict';

angular.module('myApp.tutor', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/tutor', {
        templateUrl: 'tutor/tutor.html',
        controller: 'tutorCtrl'
    });
}])

.controller('tutorCtrl', [function () {

}]);
