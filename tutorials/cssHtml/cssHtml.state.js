'use strict';

angular.module('myApp.tutorials')

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/tutorials/cssHtml', {
        templateUrl: 'tutorials/cssHtml/cssHtml.html',
        controller: 'cssHtmlCtrl'
    });
}])

.controller('cssHtmlCtrl', [function () {

}]);
