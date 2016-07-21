'use strict';

angular.module('myApp.tutorials.java', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/tutorials/java', {
        templateUrl: 'tutorials/java/java.html',
        controller: 'javaCtrl'
    });
}])

.controller('javaCtrl', [function () {

}]);
