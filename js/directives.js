angular.module('App.Directives', [])
    .directive('ytVideo', ['$sce', function ($sce) {
        return {
            restrict: 'E',
            scope: {
                url: '@'
            },
            template: `<iframe 
                width="560" 
                height="315" 
                src="{{trustedUrl}}" 
                frameborder="0" 
                allowfullscreen></iframe>`,
            link: {
                pre: function (scope, elem, attrs) {
                    scope.trustedUrl = $sce.trustAsResourceUrl(scope.url);
                }
            }
        };
    }]);