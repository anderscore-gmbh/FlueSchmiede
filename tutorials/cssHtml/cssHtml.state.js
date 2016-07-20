'use strict';

angular.module('myApp.cssHtml', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/cssHtml', {
        templateUrl: 'cssHtml/cssHtml.html',
        controller: 'cssHtmlCtrl'
    });
}])

.controller('cssHtmlCtrl', [function () {

}]);
