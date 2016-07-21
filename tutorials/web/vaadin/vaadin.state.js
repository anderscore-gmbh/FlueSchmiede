'use strict';

angular.module('myApp.tutorials.web.vaadin', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/tutorials/web/vaadin', {
        templateUrl: 'tutorials/web/vaadin/vaadin.html',
        controller: 'vaadinCtrl'
    });
}])

.controller('vaadinCtrl', [function () {

}]);
