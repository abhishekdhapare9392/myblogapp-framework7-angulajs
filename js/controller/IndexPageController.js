/*jslint browser: true*/
/*global console, MyApp*/

MyApp.angular.controller('IndexPageController', ['$scope', '$http', 'InitService', 'DataService',
  function ($scope, $http, InitService, DataService) {
      'use strict';
      
      $scope.onItemClicked = function(blog){
        DataService.blogClicked(blog);
      }

      InitService.addEventListener('ready', function () {
        DataService.getBlogs().then(function(result) {
          console.log(result);
          $scope.blogs = result.data.blogs;
        }, function(error){
          console.log(err);
        });
      });
  }
]);