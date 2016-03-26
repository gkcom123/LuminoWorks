'use strict';

/**
 * @ngdoc function
 * @name lWorksApp.controller:HeadercontrollerCtrl
 * @description
 * # HeadercontrollerCtrl
 * Controller of the lWorksApp
 */
angular.module('lWorksApp')
  .controller('HeadercontrollerCtrl','$scope','$state','localStorageService',
              function ($rootScope,$scope,$state,localStorageService) {
            //     function getUserProfile()
            //     {
            //         var lwHashId = localStorageService.get('lworks-id');
            //         var encodedProfile = lwHashId.split('.')[1];
            //         var profile = JSON.parse(Helper.url_base64_decode(encodedProfile));
            //         return profile;
            //     }
            // $scope.page = $state.current;
            // var profile = getUserProfile();
            // $scope.userName  = profile.email;
            // $scope.first_name  = profile.first_name;
            // $scope.logOut = function(){
            //     localStorageService.remove('lworks-id');
            //     localStorageService.clearAll();
            //     $state.go('home');
            // };

  });
