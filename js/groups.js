(function(){

	var groups = function($http) {

		var yourGroups = function() {
			return $http.get('https://api2.panopta.com/v2/server_group?limit=50&offset=0&api_key=6b6b73e3-dd9c-48a6-82fa-55ab37')
						.then(function(response){
							return response.data;
						});
		}
		return {
			yourGroups: yourGroups
		}
	};

	var app = angular.module('notifyApp');
	app.factory('groups', groups);
}());