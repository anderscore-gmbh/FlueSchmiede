'use strict';

angular.module('myApp.tutorials')

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/tutorials/web/javaScript', {
        templateUrl: '/tutorials/web/javaScript/javaScript.html',
        controller: 'javaScriptCtrl'
    });
}])

.controller('javaScriptCtrl', [function () {

}]);
