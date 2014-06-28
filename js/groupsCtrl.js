(function() {
	var app = angular.module('notifyApp');

	app.controller('groupsCtrl', function($scope, groups) {

		var onSuccess = function(data){
			$scope.group_info = data.server_group_list;
		};

		var onError = function(error){
			$scope.error = error;
		};

		groups.yourGroups().then(onSuccess, onError);
	});
}());