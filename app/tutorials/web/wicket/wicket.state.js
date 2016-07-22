'use strict';

angular.module('myApp.tutorials')

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/tutorials/web/wicket', {
        templateUrl: 'tutorials/web/wicket/wicket.html',
        controller: 'wicketCtrl'
    });
}])

.controller('wicketCtrl', [function () {

}]);
