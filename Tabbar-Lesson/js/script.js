$('#tab-contents .tab[id != "tab1"]').hide();

$('#tab-menu a').on('click', function(event) {
  $("#tab-contents .tab").hide();
  //id="tab-menu"のaタグがクリックされたときに、処理を実行してください
  $("#tab-menu .active").removeClass("active");
  //id="tab-contents"内のいずれかのタブがクリックされたときに、そのタブ内の全コンテンツをいったん非表示
  $(this).addClass("active");
  //.addClass()は、任意のHTML要素にクラス属性を追加できるメソッド
  $($(this).attr("href")).show();
  event.preventDefault();
});

//HTMLとCSSだけでは、4つのタブのコンテンツがすべて縦に並んで表示されてしまう
//jQueryを使って、クリックされたタブのコンテンツだけが表示されるように設定する

//クリックされた時の動作を設定する
//$('#tab-menu a').on('click', function(event) {
//  // イベント発生時に行われる処理
//});