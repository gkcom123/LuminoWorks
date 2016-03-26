'use strict';

/**
 * @ngdoc overview
 * @name lWorksApp
 * @description
 * # lWorksApp
 *
 * Main module of the application.
 */
angular.module('lWorksApp',[]);
angular.module('lWorksApp')
.config(['$stateProvider', '$urlRouterProvider',
    function( $stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

    for(var state in Helper.routes){
        $stateProvider.state( state, Helper.routes[state] );
    }
}]);
