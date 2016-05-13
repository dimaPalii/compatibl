'use strict';

angular
.module('myApp')
.service('mainService', ['$http', mainService]);
	function mainService($http) {
		return {
        	getData: getData
	    };

	    function getData() {
	        return $http.get('assets/data/data.json')
	            .then(getDataComplete)
	            .catch(getDataFailed);

	        function getDataComplete(response) {
	            return response.data;
	        }

	        function getDataFailed(error) {
	            console.log('ailed');
	        }
	    }
	}