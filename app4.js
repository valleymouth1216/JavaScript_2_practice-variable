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


//$(function(){
//  $('.box1').css({
//    'background-color': '#0000FF',
//    'height': '100px'
//  //$('セレクタ').css('background-color','#0000FF');
//  });
//});

//↓

$(function(){
  //$('.box1').slideDown();
  //上から下へスライドさせる
  //jQueryは、HTMLがすべて読み込まれてから動作するように設定しなければならない
  //このため、box1が最初は非表示になるように、app.cssファイルにdisplay: none;を追加する

  //$('.box1').slideUp();
  //下から上へスライドさせる
  //このため、box1が表示されている要素を隠すアニメーションになり最初は非表示になるためdisplay: none;が不要

  //$('.box1').show();
  //$('.box1').css({'background-color': '#0000FF'});
  //非表示の要素をjQueryで表示


   //$('.box1').hide();
   //要素をj一瞬だけ表示される

　//要素を上から下へスライドさせた後、赤色の正方形を青色の長方形（幅200px、高さ100px）に変更
  $('.box1').slideDown(function (){
    $('.box1').css({
      'background-color': '#0000FF',
      'width': '200px',
      'height': '100px'
    }).slideUp();
  });
});