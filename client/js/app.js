var dailyToDo = angular.module('dailyToDo', [
    'ngRoute',
    'ngResource'
]);

dailyToDo.config(function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'partials/days.html',
            controller: 'daysController'
        });

});


function daysController ($scope, $http) {
    // when landing on the page, get all todos and show them
    $http.get('/api/days')
        .success(function(data) {
            $scope.days = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

}