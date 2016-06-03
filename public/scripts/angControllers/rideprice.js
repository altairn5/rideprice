'use strict';

angular.module('firstApp')
		
	   .controller('ridePriceCtrl', function($scope){

	   	$scope.helloWorld = function(address){
	   		console.log('this is the address', address);

	   			};

	   	$scope.inputType = 'reset';
	   	$scope.buttonValue = 'Find Rides'	

	   	$scope.changeInputType = function(){

		   		if($scope.inputType === 'reset'){
		   			$scope.inputType = 'submit';
		   			$scope.buttonValue = 'Search Rides'
		   		}
		   		else{
		   			$scope.inputType = 'submit';
		   			$scope.buttonValue = 'Search Rides'
		   		}
	   		};


	   	// $scope.changeButtonValue = function(){
	   	// 	$scope.buttonValue

	   	// }
	   // End Controller
	   });

