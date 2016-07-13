(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('city', service);

    service.$inject = ['$http'];

    function service($http) {
        return {
            cities: [
				{
					name: "Sofia",
					temperature: "28 degrees",
					show: false,
					src: "http://image.flaticon.com/icons/png/128/118/118755.png"
					
				},

				{
					name: "Plovdiv",
					temperature: "2 degrees",
					show: false,
					src: "https://cdn4.iconfinder.com/data/icons/mini-material-design-weather-icons-single-color/32/day_mist-128.png"
					
				},

				{
					name: "Varna",
					temperature: "25 degrees",
					show: false,
					src: "http://image.flaticon.com/icons/png/128/149/149209.png"
				
				},

				{
					name: "Burgas",
					temperature: "27 degrees",
					show: false,
					src: "https://cdn4.iconfinder.com/data/icons/mini-material-design-weather-icons-single-color/32/snow_light-128.png"
					
				}

			]
        };

       
    }

}(angular));









