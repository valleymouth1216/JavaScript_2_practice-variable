$(function() {
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('active');
    //.toggleClass()は、指定されているclass（ここではactive）をトグル処理するメソッド
    //トグル処理では、該当のclass属性がある場合にはclassが削除され、ない場合にはclassが追加さる
    $('#sp-menu').fadeToggle();
    //.fadeToggle()は、要素のフェードイン・フェードアウトを切り替えるメソッド
    //このメソッドを使って、ハンバーガーメニューを開いたときの状態を設定
    event.preventDefault();
  });
});