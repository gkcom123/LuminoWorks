'use strict';

/**
 * @ngdoc overview
 * @name lWorksApp
 * @description
 * # lWorksApp
 *
 * Main module of the application.
 */
var lWorksApp = angular.module('lWorksApp',['ngRoute']);
lWorksApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: '/views/main.html',
      controller: 'HomepageCtrl'
    }).
    when('/register', {
      templateUrl: '/views/pgregister.html',
      controller: 'PgregistrationCtrl'
    }).
    otherwise({
          redirectTo: '/'
    });
}]);
