//= require_self
//= require_tree ./angular
hub = angular.module("UlResourceHub", ["ui.router",'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ng-token-auth']).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/sign_in', {
        templateUrl: 'views/user_sessions/new.html',
        controller: 'UserSessionsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });