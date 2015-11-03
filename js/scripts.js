var apiKey = 'f40bb4460c5fd3208bf382531a59218a';
var basePath = '';
var sizeOptions = '';
var logo_sizes = '';	
var poster_sizes = '';
var profile_sizes = '';

$(document).ready(function(){
	// $('#movie-search-form').submit(function(){
	// 	event.preventDefault();
	// 	var movieString = $('#movieInput').val()
	// 	var searchUrl = 'http://api.themoviedb.org/3/search/movie?query='+movieString+'&api_key='+apiKey;

	// 	$.getJSON(searchUrl, function(searchData){
	// 		console.log(searchData);
	// 		movieSearchArray = searchData.results;
	// 		var x = 0;
	// 		var html ='';
	// 		for(i=0; i<movieSearchArray.length; i++){
	// 			x++;
	// 			var isAdult = movieSearchArray[i].adult;
	// 			var backdrop_path = movieSearchArray[i].backdrop_path;
	// 			var genre_ids = movieSearchArray[i].genre_ids;
	// 			var movieId = movieSearchArray[i].id;
	// 			var title = movieSearchArray[i].title;
	// 			var overview = movieSearchArray[i].overview;
	// 			var popularity = movieSearchArray[i].popularity;
	// 			var posterPath = movieSearchArray[i].poster_path;
	// 			var releaseDate = movieSearchArray[i].release_date;
	// 			var voteAverage = movieSearchArray[i].vote_average;
	// 			var voteCount = movieSearchArray[i].vote_count;
				
	// 				if(i==0){
	// 				html += '<div class="movie-row">';
	// 				}

	// 				if(x==5){
	// 				html += '</div>';
	// 				html += '<div class="movie-row">';
	// 				x=1;
	// 				}

	// 				html += '<div class="now-playing-movie">';
	// 				html += '<img title="'+overview+'" alt="'+title+'" src="'+basePath+'w300'+posterPath+'">';
	// 				html += '</div>';	
	// 				$('#now-playing-wrapper').html(html);

	// 				if(i == (movieSearchArray.length-1)){
	// 					html += '</html>';
	// 					// $(html).appendTo('#now-playing-wrapper');
	// 				}
	// 			}
	// 			console.log(html);
	// 		});
	// });

	$('#movie-search-form').submit(function(){
			event.preventDefault();
			var movieString = $('#movieInput').val()
			var mediaType = $('#search-options').val();
		
console.log("Media Type: " + mediaType);

			// var searchUrl = 'http://api.themoviedb.org/3/search/person?query='+movieString+'&api_key='+apiKey;
			var searchUrl = 'http://api.themoviedb.org/3/search/' + mediaType + '?query='+movieString+'&api_key='+apiKey;
			console.log(searchUrl);
			$.getJSON(searchUrl, function(searchData){
				console.log(searchData);
				movieSearchArray = searchData.results;
				var x = 0;
				var html ='';
				for(i=0; i<movieSearchArray.length; i++){
					x++;
					var isAdult = movieSearchArray[i].adult;
					var backdrop_path = movieSearchArray[i].backdrop_path;
					var genre_ids = movieSearchArray[i].genre_ids;
					var movieId = movieSearchArray[i].id;
					var title = movieSearchArray[i].title;
					var overview = movieSearchArray[i].overview;
					var popularity = movieSearchArray[i].popularity;
					var posterPath = movieSearchArray[i].poster_path;
					var releaseDate = movieSearchArray[i].release_date;
					var voteAverage = movieSearchArray[i].vote_average;
					var voteCount = movieSearchArray[i].vote_count;
					var person = movieSearchArray[i].name;
					var actorProfile = movieSearchArray[i].profile_path;
					var knownFor = movieSearchArray[i].known_for;

					
							if(i==0){
							html += '<div class="movie-row">';
							}

							if(x==5){
							html += '</div>';
							html += '<div class="movie-row">';
							x=1;
							}
	
								if(mediaType == "movie" || mediaType == "tv"){
									html += '<div class="now-playing-movie">';
									html += '<img title="'+overview+'" alt="'+title+'" src="'+basePath+'w300'+posterPath+'">';
									html += '</div>';	
								}
								else if (mediaType == "person"){
									html += '<div class="now-playing-movie">';
									html += '<img title="'+person+'" alt="'+title+'" src="'+basePath+'w300'+actorProfile+'">';
									html += '</div>';	
								}
								else {
									html += '<div class="now-playing-movie">';
										if((movieSearchArray[i].media_type == 'movie') || (movieSearchArray[i].media_type == 'tv')){
											html += '<img title="'+overview+'" alt="'+title+'" src="'+basePath+'w300'+posterPath+'">';
										}
										else if (movieSearchArray[i].media_type == 'person'){
											html += '<img title="'+person+'" alt="'+title+'" src="'+basePath+'w300'+actorProfile+'">';
										}
									// html += '<img title="'+person+overview'" alt="'+title+'" src="'+basePath+'w300'+actorProfile+posterPath+'">';
									html += '</div>';
								}
	
							$('#now-playing-wrapper').html(html);

							if(i == (movieSearchArray.length-1)){
								html += '</html>';
								// $(html).appendTo('#now-playing-wrapper');
							}
					}
					console.log(html);
				});
		});

});



var siteConfig = 'https://api.themoviedb.org/3/configuration?api_key='+apiKey;

$.getJSON(siteConfig, function(data){
	console.log(data);
	basePath = data.images.base_url;
	sizeOptions = data.images.poster_sizes;
	//0: "w300" 1: "w780" 2: "w1280" 3: "original"
	posterSize = 'w300';
	logo_sizes = logo_sizes['original'];
	profileSizes = profile_sizes['original'];
});


var nowPlaying = 'http://api.themoviedb.org/3/movie/now_playing?api_key='+apiKey;

$.getJSON(nowPlaying, function(data){
	console.log(data);
	var html = "";
	var x = 0;
	movieArray = data.results;
	// movieArray = objectArray;
	// for(i=0; i<data.results.length; i++){
	for(i=0; i<movieArray.length; i++){
		x++;
		var isAdult = movieArray[i].adult;
		var backdrop_path = movieArray[i].backdrop_path;
		var genre_ids = movieArray[i].genre_ids;
		var movieId = movieArray[i].id;
		var title = movieArray[i].title;
		var overview = movieArray[i].overview;
		var popularity = movieArray[i].popularity;
		var posterPath = movieArray[i].poster_path;
		var releaseDate = movieArray[i].release_date;
		var voteAverage = movieArray[i].vote_average;
		var voteCount = movieArray[i].vote_count;	

		if(i==0){
			html += '<div class="movie-row">';
		}

		if(x==5){
			html += '</div>';
			html += '<div class="movie-row">';
			x=1;
		}
		html += '<div class="now-playing-movie">';
		html += '<img title="'+overview+'" alt="'+title+'" src="'+basePath+'w300'+posterPath+'">';
		html += '</div>';
		
		if(i == (movieArray.length-1)){
			html += '</html>';
			$(html).appendTo('#now-playing-wrapper');
		}
	}
}); // End get json - popular movies




