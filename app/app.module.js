var app = angular.module("myApp", [
  "myAppRouter",
  "sliderController",
  "sliderService",
]);

app.run(function ($rootScope) {
  $rootScope.apiUrl = "https://631f0b9358a1c0fe9f5e94c9.mockapi.io/api/users";
});
