'use strict';

angular.module('myApp.tutorials.web', [
    'ngRoute',
    'myApp.tutoirals.web.javaScript',
    'myApp.tutoirals.web.spring',
    'myApp.tutoirals.web.vaading',
    'myApp.tutoirals.web.wicket'
])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/tutorials/web', {
        templateUrl: 'tutorials/web/web.html',
        controller: 'webCtrl'
    });
}])

.controller('webCtrl', [function () {

}]);
