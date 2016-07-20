'use strict';

angular.module('myApp.whichTut', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/whichTut', {
        templateUrl: 'whichTut/whichTut.html',
        controller: 'whichTutCtrl'
    });
}])

.controller('whichTutCtrl', [function () {

}]);
