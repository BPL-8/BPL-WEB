var bplApp = angular.module('bplApp', ['ngResource','ngRoute']);

bplApp.config(
    function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/index',{
                templateUrl:'/partials/Main/main',
                controller:'nMainCtrl'
            })
            .otherwise({redirectTo:'/index'})
    }
);