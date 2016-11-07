
function riskDriverController($scope, $http) {
  $scope.selectedTab = 0;
  $scope.getTab = function (item){
    $scope.selectedTab = item;
    console.log($scope.selectedTab );
  }
}


angular.module('FqApp').component('chillRiskdriver', {
  templateUrl: 'app/riskDriver/riskDriver.component.html',
  controller: riskDriverController,
  bindings: {
    policyDetails: '=',
		vehicleDetails: '='
  }
});