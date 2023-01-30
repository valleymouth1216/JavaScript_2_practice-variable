//jQueryで「マウスオーバー」イベントを設定する
 //マウスを赤い四角に持っていくと青い四角に変更する カーソルが外れても青いまま
//$(function(){
//  $('.box1').mouseover(function(){
//    $('.box1').css({'background-color': '#0000FF'});
//  });
//});

//イベントの記述
//$('.セレクタ名').イベント名(function(){
//  イベント発生時に行われる処理
//});


//jQueryで「マウスオーバー」イベントを設定する
 //マウスを赤い四角に持っていくと青い四角に変更する カーソルが外れると赤い四角に戻る
$(function(){
  $('.box1').mouseover(function(){
    $('.box1').css({'background-color': '#0000FF'});
  });
  $('.box1').mouseout(function(){
    $('.box1').css({'background-color': '#FF0000'});
  });
});