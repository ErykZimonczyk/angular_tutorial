/**
 * Created by Eryk on 2015-04-11.
 */
'use strict';

app.service('Database',function(){
  return {
    addDatabase: function(){
      console.log("addDatabase");
    },
    searchDatabase: function(){
      console.log("searchDatabase");
    },
    deleteDatabase: function(){
      console.log("deleteDatabase");
    }
  }
});

app.controller('menuCtrl',function($scope,Database,$location){
  $scope.go = function(url) {
    angular.element(document.getElementsByClassName('menu-option active')).toggleClass('active');
    $location.path(url);
    console.log("go() with url = " + url);
  };

  $scope.showList = function(elementId) {
    var oldActive = angular.element(document.getElementsByClassName('menu-option active'));
    var newActive = angular.element(document.getElementById(elementId));

    if(oldActive.attr('id') != newActive.attr('id')){
      oldActive.toggleClass('active');
    }
    newActive.toggleClass('active');
  };

  $scope.menu = {
    name: 'FORAM',
    icon: 'bars',
    list: [
      {
        name: 'Home',
        icon: 'home',
        args: '/',
        click: $scope.go

      },
      {
        name: 'Databases',
        icon: 'database',
        args: 'databasesSubmenu',
        click: $scope.showList,
        list: [
          {
            name: 'New',
            icon: 'plus',
            args: '',
            click: Database.addDatabase

          },
          {
            name: 'Search',
            icon: 'search',
            args: '',
            click: Database.searchDatabase

          },
          {
            name: 'Delete',
            icon: 'minus',
            args: '',
            click: Database.deleteDatabase

          }
        ]
      },
      {
        name: 'Browse',
        icon: 'folder-open',
        args: '/browse',
        click: $scope.go

      },
      {
        name: '3D Visualisation',
        icon: 'cube',
        args: '/visualisation',
        click: $scope.go

      },
      {
        name: 'Charts',
        icon: 'pie-chart',
        args: 'chartSubmenu',
        click: $scope.showList,
        list: [
          {
            name: 'Line Charts',
            icon: 'line-chart',
            args: '/linechart',
            click: $scope.go

          },
          {
            name: 'Bar Charts',
            icon: 'bar-chart',
            args: '/barchart',
            click: $scope.go

          },
          {
            name: 'Area Charts',
            icon: 'area-chart',
            args: '/areachart',
            click: $scope.go

          }
        ]
      },
      {
        name: 'Settings',
        icon: 'gear',
        args: '/settings',
        click: $scope.go

      }
    ]
  };




});
