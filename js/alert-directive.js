(function(){
	var app = angular.module('notifyApp');

	app.directive('alertDir', function() {
		return {
			restrict: "E",
			template: "<div>There is an alert</div>"
		}
	});
}());