function PolicyController($scope, $http) {
  $scope.policyDetails = {
		ncd: '',
		coverType: '',
		
		voluntaryExcess: ''
	};
	$http.get('data/codebook/Chill-CND.json').then(function (response) {
		$scope.CDNs = response.data.data;
	});
	$http.get('data/codebook/C016.json').then(function (response) {
		$scope.coverTypes = response.data.data;
	});
}

angular.module('FqApp').component('chillPolicy', {
  templateUrl: 'app/policy/policy.component.html',
  controller: PolicyController,
  bindings: {
    policyDetails: '='
  }
});