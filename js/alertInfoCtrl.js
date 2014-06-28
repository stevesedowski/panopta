(function() {
	var app = angular.module('notifyApp');

	app.controller('alertInfoCtrl', function($scope, alerts) {

		var onSuccess = function(data){
			$scope.alerts = data.outage_list;
			console.log(data);
		};
		var onError = function(error) {
			$scope.error = error;
		};

		alerts.activeAlerts().then(onSuccess, onError);
	});
}());