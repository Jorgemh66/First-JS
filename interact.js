angular.module('list', [])
	.controller('listcontroller', function function_name($scope) {

	$scope.entry = " ";
	
	$scope.content = [];
	
				$scope.save = function(){
				$scope.content.push($scope.entry);
				$scope.entry = "";
				}
	})
;
