angular.module('bankAccount',[
    'ngRoute',
    'persistence',
    'bankAccount.controllers'
]).config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/register.html',
            controller : 'AccountCtrl'
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller : 'AccountCtrl'
        })
        .when('/myaccount', {
            templateUrl: 'views/AccountInfo.html',
        })
        .when('/add', {
            templateUrl: 'views/AddMovement.html',
            controller : 'AccountCtrl'
        })
        .when('/edit', {
            // templateUrl: 'views/register.html',
        })
        .when('/detail', {
            templateUrl: 'views/DetailMovement.html',
        })
        .otherwise({redirectTo: '/'});
}]);