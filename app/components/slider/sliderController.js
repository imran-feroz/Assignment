angular.module("sliderController", []).controller("sliderCtrl", [
  "$scope",
  "$interval",
  "sliderContent",
  function ($scope, $interval, sliderContent) {
    let interval;
    $scope.requesting = true;
    $scope.intervalTime = 3000;
    $scope.start = true;

    //==========================Start Request============================
    $scope.startSlider = function () {
      data = [];
      // $scope.dataset='';
      $scope.requesting = true;
      interval = $interval(function () {
        $scope.getSlide();
      }, $scope.intervalTime);
    };
    //==========================Stop Request=============================
    $scope.stopSlider = function () {
      $scope.requesting = false;
      $interval.cancel(interval);
    };
    //==========================Get Slide from backend service===========
    $scope.getSlide = function () {
      sliderContent.getData().then(function (res) {
        $scope.dataset = Object.values(res.data);
        $scope.start = false;
      });
    };
  },
]);
