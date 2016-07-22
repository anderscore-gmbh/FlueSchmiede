'use strict';

angular.module('myApp.tutorials')

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/tutorials/web', {
        templateUrl: 'tutorials/web/web.html',
        controller: 'webCtrl'
    });
}])

.controller('webCtrl', [function () {

}]);
