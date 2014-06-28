(function() {

	var app = angular.module('notifyApp');

	app.controller('homeCtrl', function($scope, alerts){

		var onSuccess = function(data) {
			$scope.total = data.meta.total_count;
			$scope.alerts = data.outage_list;
			$scope.startTime = data.outage_list.start_time;
			$scope.endTime = data.outage_list.end_time;
			$scope.active = activeAlerts(data.meta.total_count);
			if ($scope.active) {
				$scope.val = true;
			} else {
				$scope.none = true;
			}
			

			
/*			$scope.start_date = data.outage_list[0].start_time - Date();
			alert($scope.start_date);*/
			
			/*alert(n);*/

		};

		var onError = function(error) {
			$scope.error = error;
		};

		var activeAlerts = function(active) {
		    return active > 0 ? active : 0;
		};
		// creating a function within the controller; goes against keeping logic out of the controller
		// but have to make this work!!!
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


		alerts.activeAlerts().then(onSuccess, onError);
		// $scope.duration = timeDiff.getDuration($scope.startTime, $scope.endTime);
	});
}());