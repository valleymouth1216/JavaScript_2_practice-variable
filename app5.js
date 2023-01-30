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




//$(function(){
//  $('.要素1').メソッド(function (){
//    $('.要素1').css({
//      'プロパティ1': '値1',
//      'プロパティ2': '値2'  ←最後は,いらない
//    }).メソッド();
//  });
//});