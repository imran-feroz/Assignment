angular.module("sliderService", []).factory("sliderContent", [
  "$http",
  "$rootScope",
  function ($http, $rootScope) {
    return {
      getData: function () {
        return $http.get($rootScope.apiUrl);
      },
    };
  },
]);
