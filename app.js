'use strict';
function startListener () {
	$('form').submit(function(event){
		event.preventDefault();
		var searchText = $('input[type=text]').val();
		console.log(searchText);
		queryAPI(searchText, displayResults);
	});
}

function queryAPI (searchText, callback) {
	var params = {
		q: searchText,
		type: 'music',
		info: '0',
		limit: '20',
		k: '271516-Recommen-DHVL11EC'
	};
	$.getJSON('http://www.tastekid.com/ask/ws', params, callback);

}

function displayResults (data) {
	console.log(data);
	$('div .results').children().remove();
	$('.searchresults').removeAttr('hidden');
	for ( var i=1 ; i <= data.Similar.Results.length ; i++) {
		var item = data.Similar.Results[i-1].Name;
		console.log(item);
		var renderHTML = '<p>' + item + '</p>';
		$('div .results').append(renderHTML);
	}
}

$(function () {
	startListener();
});