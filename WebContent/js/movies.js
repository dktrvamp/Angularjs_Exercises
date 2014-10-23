var movies = angular.module('movies', ['ngProgress']);

movies.controller('movieController', function ($scope, $http, ngProgress) {
	
	$scope.sortPrimary = 'year',


	  $scope.sortPrimaryOptions = ['year', 'title', 'rating','runtime','audience_score'];
	$scope.sortPrimaryOptions.sort(); 
	
	$scope.movies=[];
	
	$scope.search = '';
	$scope.fetchResults= function(){
		ngProgress.start();
	$http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies.json', {
       
		params: {
        	page_limit: '50',
            page: '2',
            q: $scope.search,
        	  apikey: '3zzjsgkq6bhqhcwwpppurvqn',
            callback: 'JSON_CALLBACK'
        }
    })
    .success(function (data) {
        $scope.result = data.movies;
        $scope.abridged_cast = data.name;
        $scope.ratings;
        $scope.release_dates;
        
    
	console.log(data);
    });
	};
});










