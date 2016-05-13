'use strict';

angular
.module('myApp')
.directive('ssTable', [ssTable]);

	function ssTable(){
	var directive = {
		scope: {
			colors: '='
		},
		controllerAs: 'vm',
		restrict: 'EA',
		templateUrl: 'components/directives/ssTableDirective/ssTableDirective.html',
		replace: true,
		link: link
	};
	return directive;

	function link(scope) {
		scope.sortType     = 'colorName'; // set the default sort type
		scope.sortReverse  = false;  // set the default sort order	
	}
};