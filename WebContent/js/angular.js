var app = angular.module("myApp",['ngRoute','ui.bootstrap']);

var custInfo=[];
app.controller('TodoCtrl', function($scope, $http) {
	
	$scope.loadData = function(){
		$http({
			url:"data/data.json",
			method:"GET"
		}).success(function(data){
			$scope.custInfo = data;
		});
	};
	$scope.deleteStudent = function(currIndex){
		$scope.custInfo.splice(currIndex,1);
	};
	
	
	$scope.addPerson = function(){
		
	    var custInfo = {
	    		firstName: $scope.firstName,
	    		lastName: $scope.lastName,
	    			age: $scope.age, 
	    	
	    };

	    $scope.custInfo.push(custInfo);
	    $scope.firstName ="";
	    $scope.lastName ="";
	    $scope.age ="";
	    
	   
	  };
	 
	$scope.edit = function(index){
		
		$scope.firstName = $scope.custInfo[index].firstName;
		$scope.lastName = $scope.custInfo[index].lastName;
		$scope.age = $scope.custInfo[index].age;
		$scope.deleteStudent(index);
	};
		


	
	 $scope.blur = false;
    $scope.items = [{'text':'this','done':false},
                    {'text':'is','done':false},
                    {'text':'a','done':false},
                    {'text':'loop','done':false},
                    {'text':'through','done':false},
                    {'text':'items','done':false},
                    
                    
                    ];

    $scope.add = function() {

      $scope.items.push({'text':$scope.items_,'done':true});
      	$scope.items_='';
    };
    $scope.remove = function() {
    	
        $scope.items = $scope.items.filter(function(item){
        	return !item.done;
        });
      };
  





});

