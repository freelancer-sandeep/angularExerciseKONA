'use strict';

var app = angular.module('MobileAngularUiExamples', [
    "ngRoute",
    "ngTouch",
    "mobile-angular-ui"
]);

/*
 -- Route provider
 */

app.config(function ($routeProvider) {
    $routeProvider.when('/', { 
            templateUrl: "templates/listemployee.html",
            controller: "MainController"
        });
       $routeProvider.when('/add_employee', { 
            templateUrl: "templates/addEmployee.html",
            controller: "AddEmployeeController"
        });  
        
    $routeProvider.when('/about', {templateUrl: "templates/about.html"});
});
