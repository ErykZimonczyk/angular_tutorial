/**
 * Created by Eryk on 2015-04-11.
 * */
'use strict';

app.directive('menu',function(){
  return {
    restrict: 'E',
    scope: {
      menu: "=menu"
    },
    templateUrl: '/views/menu-temp.html'
  }
});

app.directive('menuPosition',function($location){
  return {
    restrict: 'E',
    scope: {
      position: "="
    },
    templateUrl: '/views/submenu-temp.html',
    link: function (scope, element, attrs) {
      if(scope.position.list.length == 0){
        element.bind('click',function(){
          $location.path(scope.position.args).replace();
          scope.$apply();
        })
      } else {
        element.bind('click',function(e){
          element[0].find('ul').toggleClass('visible');
        })
      }
    }

  }
});
