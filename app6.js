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
//$(function(){
// $('.box1').mouseover(function(){
//    $('.box1').css({'background-color': '#0000FF'});
    //マウスを四角に持っていくと色が変わる
//  });
//  $('.box1').mouseout(function(){
//    $('.box1').css({'background-color': '#FF0000'});
    //マウスを四角外に持っていくと色が変わる
//  });
//});


//マウスクリックイベントの記述
//$('.セレクタ名').on('click', function() {
//  イベント発生時に行われる処理
//});


$(function(){
  $('.box1').on('click', function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});
//四角をクリックすると.box1-extの太線が適応され、マウスが四角外に出るとふ太線解除される