var app = angular.module('Skool');
app.directive('homeDirective', function() {
    return {
        restrict: 'E',
        scope: { },
        templateUrl: 'app/components/home/home.html'
    };
});