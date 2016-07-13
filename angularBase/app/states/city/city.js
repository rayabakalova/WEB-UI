(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('city', city)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('city', {
                url: '/city',
                template: '<city></city>'
            });
    }

    function city() {
        var directive = {
            templateUrl: './states/city/city.html',
            restrict: 'E',
            controller: controller,
            scope: {
               
            }
        };

        return directive;
    }

    controller.$inject = ['$scope', 'city'];
    function controller($scope, city) {
        $scope.cities = city.cities;
        $scope.showTemperature = function (city) {

         	city.show = !city.show;

        }
    }

}(angular));







