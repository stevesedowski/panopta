(function() {
	
	var outage = function($http) {

		var getOutageInfo = function() {
			return  $http.get('https://api2.panopta.com/v2/outage?api_key=6b6b73e3-dd9c-48a6-82fa-55ab37')
					.then(function(response){
						return response.data;
					});
		}

		return {
			getOutageInfo: getOutageInfo
		}
	}
	var module = angular.module('notifyApp');
	module.factory('outage', outage);

}());