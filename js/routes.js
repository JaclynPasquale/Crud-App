;(function(){
'use strict';

angular.module('placesApp')
.config(function($routeProvider){
  $routeProvider

  .when('/', {
    templateUrl: 'views/table.html',
    controller: 'PlacesCtrl',
    controllerAs: 'pCtrl'
  })
  .when('/new', {
    templateUrl: 'views/form.html',
    controller: 'PlacesCtrl',
    controllerAs: 'pCtrl'
  })
  .when('/id:', {
    templateUrl: 'views/show.html',
    controller: 'PlacesCtrl',
    controllerAs: 'pCtrl'
  })
  .when('/id:edit', {
    templateUrl: 'views/form.html',
    controller: 'PlacesCtrl',
    controllerAs: 'pCtrl'
  })
  .otherwise({redirectTo: '/'})

})






})();
//end of iffe
