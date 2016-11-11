hub.controller "GamesController",($http,$scope)-> 
	$scope.init = () ->
		$scope.currentPage = 1
		$scope.getGames()
	$scope.getGames = () ->
		http =
			method: "GET"
			url: "/games.json" 
			params:
				page: $scope.currentPage
		$http(http)		
			.success (response) ->
				$scope.games = response.games
	$scope.setPage = (newPage) ->
		newPage = 1 if newPage < 1
		$scope.currentPage = newPage
		$scope.getGames()