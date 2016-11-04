function DriverController($scope, $http) {
  $scope.driverDetails = {
		
	};
	// $http.get('data/codebook/Chill-CND.json').then(function (response) {
	// 	$scope.CDNs = response.data.data;
	// });
	
}

angular.module('FqApp').component('chillDriver', {
  templateUrl: 'app/driver/driver.component.html',
  controller: DriverController,
  bindings: {
    driverDetails: '='
  }
});