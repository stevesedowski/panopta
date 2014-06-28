(function() {

	var app = angular.module('notifyApp');

	app.controller('outageCtrl', function($scope, outage){

		var onSuccess = function(data) {
			$scope.outage_info = data.outage_list;
			$scope.total_outs = data.meta.total_count;
			$scope.val = true;
			// var start = data.outage_list[0].start_time;
			// var end = data.outage_list[0].end_time;
			// console.log(Math.abs(end - start));
			
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

		outage.getOutageInfo().then(onSuccess, onError);

	});

	

}());