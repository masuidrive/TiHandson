// P.47

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

var view = Titanium.UI.createView({});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	height: 32,
	width: 200,
	top: 80
});

var button1 = Titanium.UI.createButton({
	title: "touch me",
	height: 32,
	width: 120,
	top: 120
});

view.add(label1);
view.add(button1);

win1.add(view);

button1.addEventListener('click', function() {
	Titanium.UI.createAlertDialog({
		title: "タイトル",
		message: "クリックされました"
	}).show();
});

//
// create controls tab and root window
//

var win2 = Titanium.UI.createWindow({  
    title:'時計',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'時計',
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

win2.addEventListener('open', function () {
    setInterval(function() {
	   var d = new Date();
	   label2.text = String.format("%d:%d:%d", d.getHours(), d.getMinutes(), d.getSeconds());
    }, 1000);
});

// 変更ここから
var win3 = Titanium.UI.createWindow({  
    title:'Web',
    backgroundColor:'#fff'
});
var tab3 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Web',
    window:win3
});

var webview1 = Titanium.UI.createWebView({
	url:"http://appcelerator.com/"
});
win3.add(webview1);
// 変更ここまで

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3);  


// open tab group
tabGroup.open();
