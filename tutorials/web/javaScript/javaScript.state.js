'use strict';

angular.module('myApp.javaScript', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/javaScript', {
        templateUrl: 'javaScript/javaScript.html',
        controller: 'javaScriptCtrl'
    });
}])

.controller('javaScriptCtrl', [function () {

}]);
