hub.controller("StudentsController", function($scope,$http){
	$scope.getStudents = function(){
		$http.get("/students.json").
		then(function(response) {
	    	$scope.students = response.data.students;
	    	console.log("inside get Students");
	    	console.log($scope.students);
		});
	};
	$scope.save = function(){
		alert("I am clicked");
		$http({ method: "POST", url: $scope.urls.students, data: $scope.student }).
		then(function(response) {
	    	$scope.student = {}
	    	$scope.getStudents()
		});
	}
});