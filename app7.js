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
//$(function(){
//  $('.box1').on('click', function(){
//    $(this).slideUp();
//  });
//});

//box1クラスの正方形がクリックされたとき、this（クリックされた要素）のみslideUpさせる という設定



//children・・・HTML要素直下のすべての子要素を取得するときに使う
$(function(){
  $('button').on('click', function(){
  //↑button要素がクリックされたときに、処理を実行する
    $('ul').children().css('color','red');
    //.children()は、HTML要素直下のすべての子要素を取得する
    //childrenは「ul要素の子要素」、つまり、li要素が対象になる
  });
});