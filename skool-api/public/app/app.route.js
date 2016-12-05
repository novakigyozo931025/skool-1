var app = angular.module("Skool", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "index.htm"
        })
        .when("/tudasbazis", {
            templateUrl : "component/tudasbazis.html",
            controller : "component/tudasbazis/"
        })
        .otherwise({ redirectTo: '/'});
});