app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './js/home/home.html',
        controller: 'HomeController'
       
    });
});

app.controller('HomeController', function($scope, RegisterFactory, $state, $stateParams) {

});