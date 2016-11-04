function VehicleController($scope, $http) {
  $scope.vehicleDetails = {
		carReg: "12D12345"
	};
	// $http.get('data/codebook/Chill-CND.json').then(function (response) {
	// 	$scope.CDNs = response.data.data;
	// });
	
}

angular.module('FqApp').component('chillVehicle', {
  templateUrl: 'app/vehicle/vehicle.component.html',
  controller: VehicleController,
  bindings: {
    vehicleDetails: '='
  }
});