(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('landmarkState', directive)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('landmark', {
                url: '/landmark',
                title: 'Landmarks',
                template: '<landmark-state></landmark-state>',
                params: {name: '', description: '', image: '', path: ''}
            });
    }

    function directive() {
        var directive = {
            templateUrl: './states/landmark/landmark.html',
            restrict: 'E',
            controller: controller,
            scope: {}
        };

        return directive;
    }

    controller.$inject = ['$scope', '$rootScope', 'api', '$state', '$stateParams', 'landmarks'];
    function controller($scope, $rootScope, api, $state, stateParams, landmarks) {

        $scope.name = stateParams.name;
        $scope.description = stateParams.description;
        $scope.image = stateParams.image;
        $scope.path = stateParams.path;

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