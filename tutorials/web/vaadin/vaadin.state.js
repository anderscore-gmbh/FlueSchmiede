'use strict';

angular.module('myApp.wicket', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/wicket', {
        templateUrl: 'wicket/wicket.html',
        controller: 'wicketCtrl'
    });
}])

.controller('wicketCtrl', [function () {

}]);
