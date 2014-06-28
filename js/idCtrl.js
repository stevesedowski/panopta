(function() {

	var app = angular.module('notifyApp');

	app.controller('idCtrl', function($scope, $routeParams, idhistory){
		$scope.id  = $routeParams.id;


		var onSuccess = function(data) {
			$scope.val = true;
			$scope.outageHistory = data.outage_list;
			$scope.total_outs = data.meta.total_count;
			$scope.active = activeAlerts(data.meta.total_count);
			if ($scope.active) {
				$scope.val = true;
			} else {
				$scope.none = true;
			}
			console.log($scope.outageHistory)

		};

		var activeAlerts = function(active) {
		    return active > 0 ? active : 0;
		};

		var onError = function(error) {
			$scope.error = error;
			if($scope.error){
				$scope.errorTrue = true;
			}
		};
		idhistory.idHistory($scope.id).then(onSuccess, onError);
	});
}());