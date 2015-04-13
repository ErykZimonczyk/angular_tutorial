'use strict';

/**
 * @ngdoc overview
 * @name angularTutorialApp
 * @description
 * # angularTutorialApp
 *
 * Main module of the application.
 */

var app = angular.module('foramApp', ['ngRoute']);

app.config(function($locationProvider,$routeProvider){

  $routeProvider
    .when('/',{
      templateUrl: '/views/main.html',
      controller: 'mainCtrl'
    })
    .when('/settings',{
      templateUrl: '/views/settings.html',
      controller: 'mainCtrl'
    })
    .otherwise({redirectTo: '/'});


});

app.controller('mainCtrl',function($scope){});
