'use strict';

angular
.module('myApp.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  	.when('/main', {
	    templateUrl: 'main/mainView.html',
	    controller: 'mainController',
	    controllerAs: 'vm'
	  });
}])

.controller('mainController', ['$scope', 'mainService', mainController]);

	function mainController($scope, mainService) {
	    var vm = this;

	    vm.data = [];

	    function init() {
	        return loadData()
	        	.then(function(data) {
	            	console.info(data);
	        });
	    }

	    function loadData() {
	        return mainService.getData()
	            .then(function(data) {
	                vm.data = data;
	                return vm.data;
	            });
	    }

	    init();
	}