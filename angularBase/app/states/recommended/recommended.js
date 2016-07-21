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

    controller.$inject = ['$scope', '$rootScope', 'api', '$state', '$stateParam','recomLand'];
    function controller($scope, $rootScope, api, $state, stateParam, recomLand) {


        $scope.name=stateParam.name;
        $scope.description=stateParam.description;
        $scope.image=stateParam.image;
        
        $scope.goto = function(state, path) {
            $state.go(state, {path: path})

        }

        api
        .get('users')
        .then(function (res) {
            console.log(res.data);
        });

        $(document).ready(function() {
            $('#example').DataTable();
        });
    }

}(angular));