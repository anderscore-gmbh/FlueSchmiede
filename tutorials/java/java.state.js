'use strict';

angular.module('myApp.java', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/java', {
        templateUrl: 'java/java.html',
        controller: 'javaCtrl'
    });
}])

.controller('javaCtrl', [function () {

}]);
