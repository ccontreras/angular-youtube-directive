angular.module('App.Directives', [])

    // Simple directive to embed youtube videos.
    ////////////////////////////////////////////////
    
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
                },
            }
        };
    }])
    
    
    // Counter.
    .directive('counter', ['$interval', function($interval) {
        return {
            restrict: 'EA',
            scope: false,
            template: '<span>{{count}}</span>',
            link: function (scope, elem, attrs) {
                var increment = (attrs.increment === undefined) ? 1 : parseInt(attrs.increment);
                var count = 0;
                
                $interval(function() {
                    count += increment;
                    scope.count = count;
                }, 1000);
            }
        };
    }]);