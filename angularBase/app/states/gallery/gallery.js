(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('galleryState', directive)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('gallery', {
                url: '/gallery',
                title: 'Gallery',
                template: '<gallery-state></gallery-state>',
                params: {elementId: '', path: '', x: ''}
            });
    }

    function directive() {
        var directive = {
            templateUrl: './states/gallery/gallery.html',
            restrict: 'E',
            controller: controller,
            scope: {}
        };

        return directive;
    }

    controller.$inject = ['$scope', '$rootScope', 'api', '$state', '$stateParams'];
    function controller($scope, $rootScope, api, $state, stateParams) {

        var imagecount = 1;
        var path = stateParams.path || '/assets/images/Gallery/PicturesGallery/img';
        $scope.slide = function(x) {

            var total = 5,
            Image = document.getElementById('Gallery');

            imagecount = imagecount + x;        
            if (imagecount > total) {
                imagecount = 1;
            }

            if (imagecount < 1) {
                imagecount = total;
            }
            Image.src = path + imagecount + ".jpg";

        }
        $scope.slide(0);

        $scope.goto = function(site){
            $state.go('landmark', {site: site})
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