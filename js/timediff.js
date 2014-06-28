(function(){

	var timeDiff = function($http){

		var getDuration = function(start, end){
			console.log(start, end);
		};

		return {
			getDuration: getDuration
		}

	};


	var app = angular.module('notifyApp');
	app.factory('timeDiff', timeDiff);
}());