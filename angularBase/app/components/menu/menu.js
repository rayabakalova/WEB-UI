(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('menu', directive);

    function directive() {
        var directive = {
            templateUrl: './components/menu/menu.html',
            restrict: 'E',
            controller: controller,
            scope: {}
        };

        return directive;
    }

    controller.$inject = ['$scope', 'landmarks'];
    function controller($scope, landmarks) {
        $scope.paris = landmarks.paris;
    }

}(angular));