var app = angular.module("Skool");
app.directive('eventdir', function() {
    return {
        restrict: 'E',
        scope: {
        },
        templateUrl: 'app/components/header/header.html'
    };
});