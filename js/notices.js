(function(){

	var notices = function($http){

		var getNotices = function(){
			return $http.get('https://api2.panopta.com/v2/notification_schedule?limit=50&offset=0&api_key=6b6b73e3-dd9c-48a6-82fa-55ab37')
						.then(function(response){
							return response.data;
						});
		};

		return {
			getNotices: getNotices
		}

	};

	var app = angular.module('notifyApp');
	app.factory('notices', notices);
}());