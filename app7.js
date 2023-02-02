// 正方形をクリックしたときに、その正方形のみslideUpして消えるアニメーション
//$(function(){
//  $('.bg1').on('click', function(){
//    $('.bg1').slideUp();
//  });
//
//  $('.bg2').on('click', function(){
//    $('.bg2').slideUp();
//  });
//
//  $('.bg3').on('click', function(){
//    $('.bg3').slideUp();
//  });
//
//  $('.bg4').on('click', function(){
//    $('.bg4').slideUp();
//  });
//});


//this(クリックされた要素) イベントが発生した要素のみ変化させたいときに使う
//2～18行目のコードをまとめる書き方
$(function(){
  $('.box1').on('click', function(){
    $(this).slideUp();
  });
});