# Hello World

Ti本 34p〜

## その1 空プロジェクトを作り実行

Titanium Studioのメニューで、File -> New -> Titanium Mobile Project

- Project name: 適当な英語名
- App Id: com.example.test01 など

![create project](https://github.com/masuidrive/TiWorkshopNagoya/raw/master/110617-0005.png)

![run](https://github.com/masuidrive/TiWorkshopNagoya/raw/master/110617-0007.png)

![run](https://github.com/masuidrive/TiWorkshopNagoya/raw/master/110618-0002.png)


## その2 見た目を変更

app.js の label1を変更 

    var label1 = Titanium.UI.createLabel({
    	backgroundColor: "#fcc",
    	color:'#999',
    	text:'I am Window 1',
    	font:{fontSize:20,fontFamily:'Helvetica Neue'},
    	textAlign:'center',
    	top: "100px",
    	left: "100px",
    	width: "100dp",
    	height: "50dp"
    });

![run](https://github.com/masuidrive/TiWorkshopNagoya/raw/master/110618-0015.png)

## その3 色々変えてみる

上記の色や文字などを適当に変更してみる

createLabelをcreateButtonや、createTextFieldに変更してみる。

パラメータは、下記の物を参考にしてください。

- <http://code.google.com/p/titanium-mobile-doc-ja/>
- <http://developer.appcelerator.com/apidoc/mobile/latest>
- <http://tidocs.com>

## その4 ボタンとイベント

ボタンを加え、クリックすると「クリックされました」とダイアログを出す

test01a-app.js

![run](https://github.com/masuidrive/TiWorkshopNagoya/raw/master/110618-0004.png)

![run](https://github.com/masuidrive/TiWorkshopNagoya/raw/master/110618-0005.png)


## その5 時計をタブ2に表示

下記のコードを適当な所へ挿入してください。

    win2.addEventListener('open', function () {
        setInterval(function() {
	       var d = new Date();
	       label2.text = String.format("%d:%d:%d", d.getHours(), d.getMinutes(), d.getSeconds());
        }, 1000);
    });

test01b-app.js

![run](https://github.com/masuidrive/TiWorkshopNagoya/raw/master/110618-0006.png)


## その6 3つめのタブを追加

まずは、空のタブを一つ追加。タイトルは"Web"

    var win3 = ....;
    var tab3 = ....;
    〜〜〜
    tabGroup.addTab(tab3);  

![run](https://github.com/masuidrive/TiWorkshopNagoya/raw/master/110618-0008.png)


## その7 3つめのタブにWebViewを追加

win3に下記の様なオブジェクトを追加

    Titanium.UI.createWebView({
        url: "http://appcelerator.com"
    });

test01c-app.js

![run](https://github.com/masuidrive/TiWorkshopNagoya/raw/master/110618-0009.png)


## その8 ディレクトリ解説

プロジェクトのディレクトリ解説


## その9 tiapp.xml

アプリの設定を行う


# 読み込み専用Twitter client

Ti本 65p〜

## その1 TiTweets プロジェクトを作る

## その2 先にTableView解説

Ti本 76p〜

app.jsのvar label1 〜 win1.add(label1)を削除

    var tableView = Titanium.UI.createTableView({
    	data: [
    		{title: "1行目"},
    		{title: "2行目"}
    	]
    });
    
    win1.add(tableView);

![run](https://github.com/masuidrive/TiWorkshopNagoya/raw/master/110618-0010.png)

## その3 行をクリック

下記の行を適当な所に追加

    tableView.addEventListener('click', function (ev) {
    	Ti.API.info(ev.rowData);
    	alert(ev.rowData.title);
    });

![run](https://github.com/masuidrive/TiWorkshopNagoya/raw/master/110618-0011.png)

## その4 Twitterの情報を取得

下記の行を適当な所に追加

    var http = Titanium.Network.createHTTPClient();
    http.open("GET", "http://api.twitter.com/1/statuses/user_timeline.json?screen_name=appcelerator_ja");
    http.onload = function() {
    	var json = JSON.parse(http.responseText);
    	json.forEach(function(tweet) {
    		Titanium.API.info(tweet.text);
    	});
    };
    http.send();

## その5 TableViewにTweetsを表示する

    var http = Titanium.Network.createHTTPClient();
    http.open("GET", "http://api.twitter.com/1/statuses/user_timeline.json?screen_name=appcelerator_ja");
    http.onload = function() {
    	var json = JSON.parse(http.responseText);
    	tableView.data = json.map(function(tweet) {
    	    return({title: tweet.text});
    	});
    };
    http.send();

test02b-app.js

![run](https://github.com/masuidrive/TiWorkshopNagoya/raw/master/110618-0013.png)

## その6 見た目を整形

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
    			url: tweet.user.profile_image_url,
    			top: 8,
    			left: 8,
    			width: 48,
    			height: 48
    		}));
    		
    	    return(row);
    	});
    };
    
test02c-app.js

![run](https://github.com/masuidrive/TiWorkshopNagoya/raw/master/110618-0014.png)


## その7 さらに調整

- 文字の色を黒にしよう
- ユーザ名をboldにしよう
