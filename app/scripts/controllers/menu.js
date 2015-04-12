/**
 * Created by Eryk on 2015-04-11.
 */
'use strict';

app.controller('menuCtrl',function($scope){
  $scope.menu = {
    name: 'FORAM',
    icon: 'bars',
    list: [
      {
        name: 'Home',
        icon: 'home',
        args: '/',
        click: 'go',
        list: []
      },
      {
        name: 'Databases',
        icon: 'database',
        args: '',
        click: 'showList',
        list: [
          {
            name: 'New',
            icon: 'plus',
            args: '',
            click: 'addDatabase',
            list: []
          },
          {
            name: 'Search',
            icon: 'search',
            args: '',
            click: 'searchDatabase',
            list: []
          },
          {
            name: 'Delete',
            icon: 'minus',
            args: '',
            click: 'deleteDatabase',
            list: []
          }
        ]
      },
      {
        name: 'Browse',
        icon: 'folder-open',
        args: '/browse',
        click: 'go',
        list: []
      },
      {
        name: '3D Visualisation',
        icon: 'cube',
        args: '/visualisation',
        click: 'go',
        list: []
      },
      {
        name: 'Charts',
        icon: 'pie-chart',
        args: '',
        click: 'showList',
        list: [
          {
            name: 'Line Charts',
            icon: 'line-chart',
            args: '/linechart',
            click: 'go',
            list: []
          },
          {
            name: 'Bar Charts',
            icon: 'bar-chart',
            args: '/barchart',
            click: 'go',
            list: []
          },
          {
            name: 'Area Charts',
            icon: 'area-chart',
            args: '/areachart',
            click: 'go',
            list: []
          }
        ]
      },
      {
        name: 'Settings',
        icon: 'gear',
        args: '/settings',
        click: 'go',
        list: []
      }
    ]
  };

  $scope.go = function(e) {
    console.log("go");
  };

  $scope.showList = function(e) {
    console.log("show");
  }


});
