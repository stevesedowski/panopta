(function() {

	var app = angular.module('notifyApp');

	app.controller('singCtrl', function($scope, $routeParams, single){
		$scope.id  = $routeParams.id;
		

		var onSuccess = function(data) {
			$scope.alert = data;
			$scope.val = true;
			$scope.active = true;
			$scope.sname = data.server_name;
			$scope.start_time = data.start_time;
			$scope.end_time = data.end_time;
			$scope.type = data.type;
			$scope.hash = data.hash;
			$scope.server = data.server;
			$scope.fqdn = data.server_fqdn;

		};

		var onError = function(error) {
			$scope.error = error;
		};

				 $scope.getDuration = function(start, end){
		 	var durString = '';
			var startDate = new Date(start);
			if (end) {
				var endDate = new Date(end);
			} else {
				var endDate = new Date();
			}
			var duration = (endDate - startDate)/1000/60/60;
			if (duration > 24) {
				var days = parseInt(duration/24);
				var hours = parseInt((duration/24%1)*24);
				var minutes  = parseInt((duration/24%1)*24%1*60);
				console.log('days: ' + days)
				console.log('hours: ' + hours)
				console.log('minutes: ' + minutes)
				console.log('duration: ' + duration);
				console.log('/24: ' + duration/24);
				console.log('/24%1)*24: ' + (duration/24%1)*24);
				durString = days + ' days';
				return (days + ' days ' + hours + ' hrs ' + minutes + ' min');
			} else {
				var hours = parseInt((duration/24%1)*24);
				var minutes  = parseInt((duration/24%1)*24%1*60);
				return (hours + ' hrs ' + minutes + ' min');
			}
			
			// console.log(end)
			// console.log("fresh end date: " + endDate)
			// console.log ("start date -->" + startDate); 
			// console.log ("end date -->" + endDate); 
			// var duration = (endDate - startDate)/1000/60/60;
			// console.log(duration);
		};
		
		single.singleAlert($scope.id).then(onSuccess, onError);
	});
}());

//   "end_time": null, 
//   "exclude_from_availability": false, 
//   "hash": "vKGMa36R6xavJdL", 
//   "server": "https://api2.panopta.com/v2/server/491385", 
//   "server_fqdn": "173.236.192.30", 
//   "server_name": "Portfolio Site Server", 
//   "server_resource": "https://api2.panopta.com/v2/server/491385/agent_resource/82005", 
//   "start_time": "Wed, 25 Jun 2014 03:04:02 -0000", 
//   "type": "anomaly", 
//   "url": "https://api2.panopta.com/v2/outage/-28000855"
// }