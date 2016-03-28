var app = angular.module('mobApp', []);

app.controller('mobController', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.minutes = 15;
    $scope.seconds = 10;
    $scope.secondsDisplay = '';
    
    countDownTimeOut();

    function countDown() {
        if ($scope.seconds === 0) {
            $scope.minutes -= 1;
            $scope.seconds = 59;
        } else {
            $scope.seconds -= 1;
        }
        if($scope.seconds < 10) {
            $scope.secondsDisplay = '0' + $scope.seconds;
        }
        else {
            $scope.secondsDisplay = $scope.seconds;
        }
    }

    function countDownTimeOut() {
        countDown();
        if($scope.minutes >= 0 && $scope.seconds >= 0) {            
            $timeout(countDownTimeOut, 1000);
        }
    }
}]);