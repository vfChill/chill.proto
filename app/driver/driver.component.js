function DriverController($scope, $http, $timeout, $q) {
  $scope.driverDetails = {
    gender: 'M'
		
	};
	$http.get('data/codebook/C02.json').then(function (response) {
		$scope.lkmSexCode = response.data.data;
	});

  $http.get('data/codebook/C07.json').then(function (response) {
		$scope.lkmEmploymentStatus = response.data.data;
	});

  $http.get('data/codebook/C05.json').then(function (response) {
		$scope.lkmOccupationList = response.data.data;
	});



    // list of `state` value/display objects

    $scope.selectedItem  = null;
    $scope.searchText    = null;
    $scope.querySearch   = querySearch;

    // ******************************
    // Internal methods
    // ******************************

    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      var results = query ? $scope.lkmOccupationList.filter( createFilterFor(query) ) : $scope.lkmOccupationList;
      var deferred = $q.defer();
      $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
      return deferred.promise;
    }

    /**
     * Build `states` list of key/value pairs
     */
   

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(lkmOccupationList) {
        return (lkmOccupationList.value.indexOf(lowercaseQuery) === 0);
      };

    }
  }
	

angular.module('FqApp').component('chillDriver', {
  templateUrl: 'app/driver/driver.component.html',
  controller: DriverController,
  bindings: {
    driverDetails: '='
  }
});