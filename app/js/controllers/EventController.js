"use strict";

eventsApp.controller("EventController",
                     function EventController($scope) {
                       $scope.event = {
                         name: "Angular Bootcamp",
                         date: "1/1/2014",
                         time: "10:20 AM",
                         location: {
                           address: "Google Headquarters",
                           city: "Mountain View",
                           state: "CA"
                         },
                         imageUrl: "/img/angularjs-logo.png",
                         sessions: [
                           {name: "Directive Masterclass"},
                           {name: "Scopes for fun and profit"},
                           {name: "Well behaved controllers"}
                         ]
                       };
                     });


