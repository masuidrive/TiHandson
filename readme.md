# Hello World

Ti本 34p〜

# その1 空プロジェクトを作り実行

Titanium Studioのメニューで、File -> New -> Titanium Mobile Project

- Project name: 適当な英語名
- App Id: com.example.test01 など


# その2 見た目を変更

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

# その3 色々変えてみる

上記の色や文字などを適当に変更してみる

createLabelをcreateButtonや、createTextFieldに変更してみる。

パラメータは、下記の物を参考にしてください。

- <http://code.google.com/p/titanium-mobile-doc-ja/>
- <http://developer.appcelerator.com/apidoc/mobile/latest>
- <http://tidocs.com>

# その4 ボタンとイベント

ボタンを加え、クリックすると「クリックされました」とダイアログを出す

test01a-app.js

# その5 時計をタブ2に表示

下記のコードを適当な所へ挿入してください。

    win2.addEventListener('open', function () {
        setInterval(function() {
	       var d = new Date();
	       label2.text = String.format("%d:%d:%d", d.getHours(), d.getMinutes(), d.getSeconds());
        }, 1000);
    });

test01b-app.js


# その6 3つめのタブを追加

まずは、空のタブを一つ追加。タイトルは"Web"

    var win3 = ....;
    var tab3 = ....;
    〜〜〜
    tabGroup.addTab(tab3);  


# その7 3つめのタブにWebViewを追加

win3に下記の様なオブジェクトを追加

    Titanium.UI.createWebView({
        url: "http://appcelerator.com"
    });

test01c-app.js


# その8 ディレクトリ解説

プロジェクトのディレクトリ解説


# その9 tiapp.xml

アプリの設定を行う

