'use strict';

angular.module('myApp.introduction', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/introduction', {
        templateUrl: 'introduction/introduction.html'
    });
}])
