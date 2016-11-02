

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
      {value: "page1", label: "Policy"},
      {value: "page2", label: "Vehicle"},
      {value: "page3", label: "Driver"},
    ];
    
    $scope.addItem = function () {
      $scope.navItems.push(
        {
          value: "page" + ($scope.navItems.length + 1),
          label: "Page" + ($scope.navItems.length + 1)
        }
      );
    }
				
	
}]);