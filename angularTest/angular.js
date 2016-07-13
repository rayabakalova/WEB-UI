var WeatherApp = angular.module("WeatherApp", []);

WeatherApp.controller('WeatherController', ['$scope', function($scope){

$scope.cities = [
	{
		name: "Sofia",
		temp: "28",
		show: true
	},

	{
		name: "Plovdiv",
		temp: "29",
		show:false
	},

	{
		name: "Varna",
		temp: "25",
		show: true
	},

	{
		name: "Burgas",
		temp: "27",
		show: false
	}
];

}]);

