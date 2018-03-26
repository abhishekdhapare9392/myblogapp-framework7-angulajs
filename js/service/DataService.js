/*jslint browser: true*/
/*global console, Framework7, MyApp, $document*/

MyApp.angular.factory('DataService', ['$document', '$http', function ($document, $http) {
    'use strict';

    var pub = {},
    eventListeners = {
        'blogClicked' : []
    };

    pub.addEventListener = function (eventName, callback){
        eventListeners[eventName].push(callback);
    };

    pub.blogClicked = function(blog){
        for(var i=0; i<eventListeners.blogClicked.length; i++){
            eventListeners.blogClicked[i](blog);
        }
    };

    pub.getBlogs = function() {
        return $http.get('http://localhost/myblog/v1/allblogs');
    }

    return pub;
  
    
  }]);