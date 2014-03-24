
var { ActionButton } = require("sdk/ui/button/action");
var { Frame } = require("sdk/ui/frame");
var { Toolbar } = require("sdk/ui/toolbar");


var frame = new Frame({
  url: "./searchboxframe.html"
});

var search_button = ActionButton({
	id: "search-button",
	label: "search button",
	icon: "search.png",
    contentURL: self.data.url("my-icon.png"),
    contentScriptFile: self.data.url("search.js"),
});
//to communicate between the searchboxframe.js(page script for searchboxframe.html) and the content scripts search.js(where the search results are obtained)
var data = require("sdk/self").data;

    var pageMod = require("sdk/page-mod");
    pageMod.PageMod({
      include: "searchboxframe.html",
      contentScriptFile: data.url("search.js")
    });


var panel = require("sdk/panel").Panel({
      width: 180,
      height: 180,
      contentURL:  require("sdk/self").data.url("searchresult.html")
    });



var share_button = ActionButton({
  id: "share-button",
  label: "share button",
  icon: "./share.png"
});

var download_button = ActionButton({
  id: "download-button",
  label: "download button",
  icon: "./download.png"
});

var toolbar = Toolbar({
  id: "search",
  title: "search",
  items: [frame, search_button,share_button,download_button]
});