'use strict';

angular.module('myApp.tutorials.android', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/tutorials/android', {
        templateUrl: 'tutorials/android/android.html',
        controller: 'androidCtrl'
    });
}])

.controller('androidCtrl', [function () {

}]);
