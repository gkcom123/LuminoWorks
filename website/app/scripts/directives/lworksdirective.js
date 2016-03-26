'use strict';

/**
 * @ngdoc directive
 * @name lWorksApp.directive:lWorksDirective
 * @description
 * # lWorksDirective
 */
angular.module('lWorksApp')
  .directive('lworksHeader', function () {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl:'/views/header.html'
    };
  })
  .directive('lworksBanner', function () {
		return {
			restrict: 'EA',
			replace: true,
			templateUrl: '/views/banner.html'
		}
	})
  .directive('lworksFooter', function () {
		return {
			restrict: 'EA',
			replace: true,
			templateUrl: '/views/footer.html'
		}
	})
