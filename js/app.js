(function() {

	var app = angular.module('notifyApp', ['ngRoute']);

	app.config(function($routeProvider){
		$routeProvider
			.when('/outage', {
				templateUrl: "outage.html",
				controller: "outageCtrl"
			})
			.when('/', {
				templateUrl: "home.html",
				controller: "homeCtrl"
			})
			.when('/alert-info', {
				templateUrl: "alert-info.html",
				controller: "alertInfoCtrl"
			})
			.when('/groups', {
				templateUrl: "groups.html",
				controller: "groupsCtrl"
			})
			.when('/notify', {
				templateUrl: "notify.html",
				controller: "notifyCtrl"
			})
			.when('/single-alert/:id', {
				templateUrl: "single-alert.html",
				controller: "singCtrl"
			})
			.when('/idhistory/:id', {
				templateUrl: "idhistory.html",
				controller: "idCtrl"
			})
			.when('groups', {
				templateUrl: "groups.html"
			})
			.otherwise({redirectTo: "/"});
	});

}());


