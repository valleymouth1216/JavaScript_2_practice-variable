$(function() {
  $('#back a').on('click',function(event){
    // $('.セレクタ名').on('click', function(event) {
     // #back内のaタグがクリックされたときの処理
    //   イベント発生時に行われる処理
    $('body, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
   // });
});


// $('.セレクタ名').on('click', function(event) {
　// $('.セレクタ名')→今回$('#back a')
　//$('#id名 要素名')と指定すると、id内の子要素に対してのみ指定される
　//id="back"内のaタグがクリックされたときに、処理が行われる
//   イベント発生時に行われる処理
　// $('#id名 要素名')今回.on('click',function(event)
// });


