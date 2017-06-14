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

function queryAPITasty (searchText, searchType, callback) {
	var params = {
		q: searchText,
		type: searchType,
		info: '1',
		limit: '20',
		k: '271516-Recommen-DHVL11EC'
	};
	$.getJSON('//www.tastekid.com/ask/ws', params, callback);

}

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
		var renderHTMLResults = '<h3>' + item + '</h3>';
		var renderHTMLSnippet = '<p>' + snippet + '</p>';
		$('div .results').append(renderHTMLResults);
		$('div .results').append(renderHTMLSnippet);
	}
}

var State = {};

$(function () {
	startListener();
});

