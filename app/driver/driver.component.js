function DriverController($scope, $http) {
  $scope.driverDetails = {
    gender: 'M'
		
	};
	$http.get('data/codebook/C02.json').then(function (response) {
		$scope.lkmSexCode = response.data.data;
	});
	
}

angular.module('FqApp').component('chillDriver', {
  templateUrl: 'app/driver/driver.component.html',
  controller: DriverController,
  bindings: {
    driverDetails: '='
  }
});