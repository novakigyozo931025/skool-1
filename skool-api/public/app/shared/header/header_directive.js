var app = angular.module('Skool');
app.directive('headerDirective', function() {
    return {
        restrict: 'E',
        scope: { },
        templateUrl: 'app/shared/header/header.html'
    };
});