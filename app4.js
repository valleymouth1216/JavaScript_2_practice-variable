//$(document).ready(function () {
//  $('body').html('<h1>Hello jQuery!!</h1>');
//});

//$( セレクタ ).メソッド ( パラメータ );
//セレクタ……body
//メソッド……html
//パラメータ……'<h1>Hello JQuery!!</h1>'


//jQueryを使うときのポイント
// ①jQueryサイトからjquery.min.js(最新のもの)をダウンロードする
// ②ダウンロードしたjquery.min.jsを使用するファイル移動する
// ③htmlに　<script src="jquery.min.js"></script>　←jquery.min.js(ダウンロードしたもの)
//          <script src="○○○.js"></script>         ←使用するjsファイル　を記述する
// ④○○○.jsに下記を追記する
//$(document).ready(function () {
//  // jQueryプログラムの内容   ←　$( セレクタ ).メソッド ( パラメータ );
//});
//
//or ↓は省略形
//$(function(){
//  // jQueryプログラムの内容
//});

//$( セレクタ ).メソッド ( パラメータ );
//セレクタ・・・操作の対象になる部分(htmlのbody)
//メソッド・・・何を行うのかを記述(html)
//パラメータ・・・メソッドにパラメータを指定すると、その内容に書き換えられる('<h1>Hello jQuery!!</h1>')


//【CSSメソッドの書き方】
//$('セレクタ').css({
//  'プロパティ1': '値1',
//  'プロパティ2': '値2',
//
//  :
//  :
//
//  'プロパティn': '値n'
//});
