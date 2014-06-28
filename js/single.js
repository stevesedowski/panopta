(function(){

	var single = function($http) {

		var singleAlert = function(id) {
			//$scope.val = true;
			return $http.get('https://api2.panopta.com/v2/outage/' + id + '?api_key=6b6b73e3-dd9c-48a6-82fa-55ab37')
				.then(function(response){
					return response.data;
				});
		}

		return {
			singleAlert: singleAlert
		}

	};

	var app = angular.module('notifyApp');
	app.factory('single', single);
}());