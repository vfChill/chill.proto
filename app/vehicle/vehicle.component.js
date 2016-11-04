function VehicleController($scope, $http) {
  $scope.vehicleDetails = {
		carReg: "12D12345",
        value: 10000,
        
	};
	$http.get('data/codebook/C015.json').then(function (response) {
		$scope.lkmOverNightLocation = response.data.data;
	});
    
	
}

angular.module('FqApp').component('chillVehicle', {
  templateUrl: 'app/vehicle/vehicle.component.html',
  controller: VehicleController,
  bindings: {
    vehicleDetails: '='
  }
});