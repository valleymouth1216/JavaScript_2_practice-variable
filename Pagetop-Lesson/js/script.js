$(function() {
  $('#back a').on('click',function(event){
    $('body, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});

//
// $(function() {
//   $('#back a').on('click',function(event){
//     // $('.セレクタ名').on('click', function(event) {
//      // #back内のaタグがクリックされたときの処理
//     //   イベント発生時に行われる処理
//     $('body, html').animate({
//      //animate() は、アニメーション効果を設定するjQueryの関数
//      //HTML要素のCSSプロパティを変化させることで動きを設定
//       scrollTop:0
//      //scrollTop は、スクロール位置を取得できるメソッド
//      //scrollTop:0は「最上部に移動する」の意味
//     }, 800);
//     //800ミリ秒間（0.8秒間）かけてページの最上部まで移動する
//     event.preventDefault();
//     //event.preventDefault(); は、aタグの機能を無効にするメソッド
//   });
//    // });
// });


// $('.セレクタ名').on('click', function(event) {
　// $('.セレクタ名')→今回$('#back a')
　//$('#id名 要素名')と指定すると、id内の子要素に対してのみ指定される
　//
//   イベント発生時に行われる処理
　// $('#id名 要素名')今回.on('click',function(event)
// });

//$('セレクタ名').animate({
//  変化対象のプロパティ名:変化値
//}, アニメーションの動作時間);
