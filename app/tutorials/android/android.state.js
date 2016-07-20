'use strict';

angular.module('myApp.android', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/android', {
        templateUrl: 'android/android.html',
        controller: 'androidCtrl'
    });
}])

.controller('androidCtrl', [function () {

}]);
