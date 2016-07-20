'use strict';

/**
Note that this file is only included in root dir, because the dir slides is a git submodule
*/

angular.module('myApp.slides', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/slides', {
        templateUrl: 'slides/index.html',
        controller: 'slidesCtrl'
    });
}])

.controller('slidesCtrl', [function () {

}]);
