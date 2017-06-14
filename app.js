'use strict';
function startListener () {
	$('form').submit(function(event){
		event.preventDefault();
		var searchText = $('input[type=text]').val();
		var searchType =  $('option:selected' ).val();
		console.log(searchType);
		queryAPITasty(searchText, searchType, displayResults);
	});
}

// function hotlinkListener () {
// 	$('.results').on('click','a',function(event){
// 		event.preventDefault();
// 		console.log(event);
// 		var selectedName = event.currentTarget.innerHTML;
// 		console.log(selectedName);
// 		queryAPIYouTube(selectedName,renderSelection)
	
// 	});
// }

function queryAPITasty (searchText, searchType, callback) {
	var params = {
		q: searchText,
		type: searchType,
		info: '1',
		limit: '20',
		k: '271516-Recommen-DHVL11EC'
	};
	$.getJSON('http://www.tastekid.com/ask/ws', params, callback);

}

// function queryAPIYouTube (searchText, callback) {
// 	var params = {
// 		part: 'snippet',
// 		key: 'AIzaSyA2KSl4pDb10IVZgFl9dgTGMH0sH2C143w',
// 		q: searchText,
// 		type: 'video',
// 		maxResults: '1'
// 	};
// 	$.getJSON('https:www.googleapis.com/youtube/v3/search', params, function (data){return data});

// }

// function renderSelection (data) {
// 	console.log(data);
// 	var renderHTML
// 	var item
// 	$('div .frame').children().remove();
// 	for (var i =1 ; i<= data.items.length ; i++) {
// 		item = data.items[i-1].snippet.thumbnails.medium.url;
// 		var videoLink = 'https://www.youtube.com/embed/' + data.items[i-1].id.videoId  + '?autoplay=1'
// 		var renderHTML = '<a href = ' + videoLink + ' target = "_blank" > <img src=\'' + item + '\' alt="search result image"> </a>';
// 		$('div .frame').append(renderHTML);
// 	}
// }


function displayResults (data) {
	console.log(data);
	$('div .results').children().remove();
	$('div .snippet').children().remove();
	$('.searchresults').removeAttr('hidden');
	for ( var i=1 ; i <= data.Similar.Results.length ; i++) {
		var item = data.Similar.Results[i-1].Name;
		var link = data.Similar.Results[i-1].yUrl;
		var snippet = data.Similar.Results[i-1].wTeaser;
		var yID = data.Similar.Results[i-1].yID;
		// var youTubeData = queryAPIYouTube(item);
		// console.log(youTubeData);
		// console.log(thumbnail);
		var renderHTMLResults = '<h3>' + item + '</h3>';
		var renderHTMLSnippet = '<p>' + snippet + '</p>';
		// var renderHTMLThumbnail = '<p>' + snippet + '</p>';
		$('div .results').append(renderHTMLResults);
		$('div .results').append(renderHTMLSnippet);
		// $('div .snippet').append(renderHTMLSnippet);
		// $('div .thumbnail').append(renderHTMLThumbnail);
	}
}

var State = {};

$(function () {
	startListener();
	// hotlinkListener();
});

