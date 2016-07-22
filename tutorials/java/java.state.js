'use strict';

angular.module('myApp.tutorials')

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/tutorials/java', {
        templateUrl: 'tutorials/java/java.html',
        controller: 'javaCtrl'
    });
}])

.controller('javaCtrl', [function () {

}]);
