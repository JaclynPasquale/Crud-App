;(function() {
  "use strict";

  angular.module('placesApp', ['ngRoute'])

  .controller("PlacesCtrl", function($http, $routeParams) {
    var vm = this;

    //vm.getAllPlaces = function(data){
      $http.get('https://crud-app-nss.firebaseio.com/.json')
      .success(function(data){
        vm.places = data;

      })
      .error(function(err){
        console.log(err);
      });

    //}

  vm.addNewPlace = function(data){
    $http.post('https://crud-app-nss.firebaseio.com/.json', vm.newPlace)
    .success(function(){
      vm.places[data] = vm.newPlace;
      vm.newPlace = "";
    })
    .error(function(err){
      console.log(err);
    })
  }


   vm.deletePlace = function(placeId){
     console.log(placeId);
     $http.delete('https://crud-app-nss.firebaseio.com/' + placeId + '.json')
     .success(function(){
      delete vm.places[placeId];

     })
     .error(function(err){
       console.log(err);
     })
   };



  })

  .controller('ShowController', function(){

  })

})();
