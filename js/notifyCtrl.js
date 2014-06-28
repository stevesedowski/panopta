(function() {
	var app = angular.module('notifyApp');

	app.controller('notifyCtrl', function($scope, notices){


		var onSucces = function(data) {
			$scope.notices = data;
			$scope.total = data.meta.total_count;
			$scope.list = data.notification_schedule_list;
			if ($scope.total) {
				$scope.val = true;
			} else {
				$scope.none = true;
			}
			
		};

		var onError = function(error) {
			$scope.error = error;
		};

		notices.getNotices().then(onSucces, onError);

	});
}());