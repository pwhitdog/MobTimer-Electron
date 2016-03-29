var app = angular.module('mobApp', []);

app.controller('mobController', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.minutes = 0;
    $scope.seconds = 3;
    $scope.secondsDisplay = '';
    $scope.displayTimer = true;
    
    countDownTimeOut();

    function countDown() {
        if ($scope.seconds === 0) {
            $scope.minutes -= 1;
            $scope.seconds = 59;
        } else {
            $scope.seconds -= 1;
        }
        
        fixDisplaySeconds();
    }

    function countDownTimeOut() {
        countDown();
        if($scope.minutes >= 0 && $scope.seconds >= 0) {            
            $timeout(countDownTimeOut, 1000);
        } else {
            $scope.displayTimer = false;
        }
    }
    
    function fixDisplaySeconds (){
        if($scope.seconds < 10) {
            $scope.secondsDisplay = '0' + $scope.seconds;
        }
        else {
            $scope.secondsDisplay = $scope.seconds;
        }
    }
}]);