// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var tableView = Titanium.UI.createTableView({
	data: [
		{title: "1行目"},
		{title: "2行目"}
	]
});

win1.add(tableView);

var http = Titanium.Network.createHTTPClient();
http.open("GET", "http://api.twitter.com/1/statuses/user_timeline.json?screen_name=appcelerator_ja");
http.onload = function() {
	var json = JSON.parse(http.responseText);
	tableView.data = json.map(function(tweet) {
		var row = Titanium.UI.createTableViewRow({
			className: "tweet",
			height: 'auto'
		});
		
		row.add(Titanium.UI.createLabel({
			text: tweet.user.screen_name,
			top: 8,
			left: 64,
			height: 16
		}));
		
		row.add(Titanium.UI.createLabel({
			text: tweet.text,
			top: 32,
			left: 64,
			right: 8,
			height: 'auto',
			bottom: 8
		}));
		
		row.add(Titanium.UI.createImageView({
			image: tweet.user.profile_image_url,
			top: 8,
			left: 8,
			width: 48,
			height: 48
		}));
		
	    return(row);
	});
};
http.send();


//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
