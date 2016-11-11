hub.config ($routeProvider) -> 
	$routeProvider
		.when "/",
			templateUrl: "templates/crew/index.html"
			controller: "CrewMembersController"
		.otherwise redirectTo: "/"


