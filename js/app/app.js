angular.module("meuModulo",['ngRoute']) //criar routes
.config(function($routeProvider){
    $routeProvider
    .when("/home",{
        templateUrl:"templates/home.html",
        controller:"indexController"
    }) 

    .when("/contato",{
        templateUrl:"templates/contato.html",
        controller:"contatoController"
    });

    // configura uma url padrão para não ir só no home
    $routeProvider.otherwise({redirectTo:"/home"});
});
