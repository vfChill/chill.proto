

FQApp.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
	
	"use strict";

	
	$scope.today = new Date();
	$scope.maxDate = new Date(
		$scope.today.getFullYear() - 18,
		$scope.today.getMonth(),
		$scope.today.getDate()
	);
					
					
	$scope.application = {
			
	};

	$scope.currentNavItem = 'page1';
 
    $scope.navItems = [
      {value: "Policy", label: "Policy"},
      {value: "Vehicle", label: "Vehicle"},
      {value: "Driver", label: "Driver"},
    ];
    

    $scope.addItem = function () {
      $scope.navItems.push(
        {
          value: "page" + ($scope.navItems.length + 1),
          label: "Page" + ($scope.navItems.length + 1)
        }
      );
    }
    $scope.submissionDate = "";
    $scope.userState = '';
        $scope.states = ('1 year, 2 years, 3 years').split(',').map(function (state) { return { abbrev: state }; });


	// $http.get('data/codebook/Chill-CND.json').then(function (response) {
	// 	$scope.CDNs = response.data.data;
	// });			
	

	$scope.showChanges = function() {
   console.log ($scope.vehicleDetails)
    console.log ($scope.policyDetails)
	}



	

}]);