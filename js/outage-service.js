(function() {

	var app.factory('Outage', function($resource){
	
	var getOutageInfo = function($resource) {
		return  $http.get('https://api2.panopta.com/v2/schema/resources/outage?api_key=c27e7895-6358-458f-ac2c-9bc762')
					.then(function(response){
						return response.data;
					});
		};
	};

	return {
		getOutageInfo: getOutageInfo
	}
});

	var module = angular.module('outageApp');
	module.factory('outage', outage);

}());