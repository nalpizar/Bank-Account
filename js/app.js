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
            controller : 'AccountCtrl'
        })
        .when('/add', {
            templateUrl: 'views/AddMovement.html',
            controller : 'AccountCtrl'
        })
        .when('/description/:id', {
            templateUrl: 'views/DetailMovement.html',
            controller: 'DetailMovCtrl'
        })
        .otherwise({redirectTo: '/'});
}]);