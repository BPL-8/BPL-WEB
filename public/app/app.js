var bplApp = angular.module('bplApp', ['ngResource','ngRoute']);

bplApp.config(
    function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/index',{
                templateUrl:'/partials/Main/main',
                controller:'bMainCtrl'
            })
            .when('/reg',{
                templateUrl:'/partials/reg/main',
                controller:'bRegCtrl'
            })
            .when('/rules',{
                templateUrl:'/partials/rules/main'
            })
            .when('/about',{
                templateUrl:'/partials/about/main'
            })
            .otherwise({redirectTo:'/index'})
    }
);