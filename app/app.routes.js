var app = angular.module("myAppRouter", ["ui.router"]);

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    // HOME STATES AND VIEWS ========================================
    .state("/", {
      url: "/",
      templateUrl: "app/components/slider/slider.html",
    });
  $urlRouterProvider.otherwise("/");
});
