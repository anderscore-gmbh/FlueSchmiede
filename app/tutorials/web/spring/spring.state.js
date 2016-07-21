'use strict';

angular.module('myApp.tutorials.web.spring', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/tutorials/web/spring', {
        templateUrl: 'tutorials/web/spring/spring.html',
        controller: 'springCtrl'
    });
}])

.controller('springCtrl', [function () {

}]);
