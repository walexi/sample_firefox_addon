var app = angular.module('connected', []);
app.controller('searchcontroller', function($scope) 
	{ 
		var searchdata = new Array($scope.search_params1,$scope.search_params2);
	  window.postMessage("searchdata", "searchresult.html") })

http://developer.echonest.com/api/v4/song/search?api_key=MBYXJMIXPPKHJZMZN&format=json&results=1&title= &bucket=id:fma&limit=true&bucket=audio_summary&bucket=tracks


facebook
for the script
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=1428206907398313";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

for the link in html
<div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-type="icon"></div>