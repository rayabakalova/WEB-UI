(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('recomState', directive)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('recommended', {
                url: '/recommended',
                title: 'Recommended',
                template: '<recom-state></recom-state>',
                param: {name: '', description: '', image: ''}
               
            });
    }

    function directive() {
        var directive = {
            templateUrl: './states/recommended/recommended.html',
            restrict: 'E',
            controller: controller,
            scope: {}
        };

        return directive;
    }

    controller.$inject = ['$scope', '$rootScope', 'api', '$state', 'recomLands'];
    function controller($scope, $rootScope, api, $state, recomLands) {


        $scope.recom = recomLands.recom;
        
        $scope.goto = function(state, path) {
            $state.go(state, {path: path})

        }

    }

}(angular));