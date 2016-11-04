
function riskDriverController($scope, $http) {
}

angular.module('FqApp').component('chillRiskdriver', {
  templateUrl: 'app/riskDriver/riskDriver.component.html',
  controller: riskDriverController,
  bindings: {
    policyDetails: '=',
		vehicleDetails: '='
  }
});