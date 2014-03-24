$(document).ready(function() {
	var echonest = new EchoNest("MBYXJMIXPPKHJZMZN");

   document.defaultView.addEventListener('message', function(event) {
       console.log(event.data);
       var search_parameters = new Array(event.data);
// search parameters[0]= text while [1]= category for the category..we have two options: songs or artist search 
    }, false);
 
 searchOptions = {
			name: search_parameters[0],
			fuzzy_match: true,
			bucket: 'id:fma'
  			};
//if getting the songs list through the song category. that is typing the particular song you want to hear, it brings possible collection of similar songs and their arstist..output to the html tags
//the function is not yet avalable in the API being used, i plann on modifying that to include the songs search 
 if (search_parameters[1] = "Song") { 

echonest.song().search( function(searchResultsCollection) {
							$('#artistSearchResults').append( searchResultsCollection.to_html('${name} - <strong>${foreign_ids_0_foreign_id}</strong><br/>') );
						}, searchOptions);
}
else{
	// when performing artist search, results of possible artist is released and users get to select which one precisely, then the songs matching the particular artist is reeceived,just to avoid misspelt artist search name
echonest.artist().search( function(searchResultsCollection) {
							$('#artistSearchResults').append( searchResultsCollection.to_html('${name} - <strong>${foreign_ids_0_foreign_id}</strong><br/>') );
						}, searchOptions);
};

/// next is to work on collections from the artist search, so users' click can bring another result of the selected artist songs