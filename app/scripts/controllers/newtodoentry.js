'use strict';

/**
 * @ngdoc function
 * @name bierbendigerApp.controller:NewentryCtrl
 * @description
 * # NewentryCtrl
 * Controller of the bierbendigerApp
 */
angular.module('bierbendigerApp')
  .controller('NewtodoentryCtrl', function ($scope, googleGeocodingService, BierbendigerService,$location) {
       $scope.viewId="NewtodoentryCtrl";
       $scope.newTodoEntry = {};
       $scope.map = { 
           visibility:false,
            center: {
                latitude: 0,
                longitude: 0
            },
            zoom:8,
            markers: [],
        }
        BierbendigerService.getUserCount().then(function(data){
            $scope.UserCount = data.amount;
        });
        $scope.close = function(){
            $location.path("/dashboard");
        };
        $scope.saveEntry = function(){
            console.log($scope.newTodoEntry);
            $location.path("/dashboard");
            BierbendigerService.saveTodoEntry($scope.newTodoEntry).then(function(data){});
        }
        $scope.searchLocation = function(location){
           googleGeocodingService.getAddress(location)
           .then(function(data){
               if(data.status == "OK"){
                   $scope.map = { 
                        visibility:true,
                        center: {
                            latitude: data.results[0].geometry.location.lat,
                            longitude: data.results[0].geometry.location.lng
                        },
                        zoom:8,
                        markers:[
                            {
                                latitude: data.results[0].geometry.location.lat,
                                longitude: data.results[0].geometry.location.lng,
                                id: 0,
                                title: location
                            }
                        ]
                    };
               }
               
           });
        }
  });
