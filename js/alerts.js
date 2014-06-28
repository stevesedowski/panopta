(function(){

	var alerts = function($http) {

		var activeAlerts = function() {
			//$scope.val = true;
			return $http.get('https://api2.panopta.com/v2/outage/active?api_key=6b6b73e3-dd9c-48a6-82fa-55ab37')
				.then(function(response){
					return response.data;
				});
		}

		return {
			activeAlerts: activeAlerts
		}

	};

	var app = angular.module('notifyApp');
	app.factory('alerts', alerts);
}());