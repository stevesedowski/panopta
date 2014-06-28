(function(){

	var idhistory = function($http) {
		
		var idHistory = function(id) {
			return $http.get('https://api2.panopta.com/v2/server/' + id + '/outage?api_key=6b6b73e3-dd9c-48a6-82fa-55ab37')
				.then(function(response){
					return response.data;
				});
		}

		return {
			idHistory: idHistory
		}

	};

	var app = angular.module('notifyApp');
	app.factory('idhistory', idhistory);
}());