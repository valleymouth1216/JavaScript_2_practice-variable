// 関数・・・繰り返し使われる一連の処理を1つにまとめたもの

//関数書き方
// function 関数名(){
//   処理内容
// }


//引数と戻り値
// 引数・・・入力する値
// 戻り値・・出力される値

//書き方
// function 関数名(引数){
//   処理
//   return 戻り値;
// }
//→これで関数の処理結果が呼び出し元から利用できるようになる


//簡単な関数を記述する
//function addString(strA){
//  //functionの後に関数名「addString」を記述し引数として「str」を定義している
//  let addStr = "Hello " + strA;
//  //変数名「addStr」に「Hello」の文字列と関数の引数「strA」に設定されている文字列を結合している
//  return addStr;
//  //結合結果の格納された「addStr」を関数の戻り値としている。returnを記述することで出力結果が表示される
//}
//→この状態では関数を作成しただけ


//作成した関数を呼び出す
// メイン部分
//  let alertString;
// 作成した関数を呼び出し、変数へ格納
//  alertString = addString("WebCamp");
//
// 変数の中身をアラートで表示する
//  (alertString);
//
// 作成した関数
//  function addString(strA){
//    let addStr = "Hello " + strA;
//    return addStr;
//  }
//アラートウィンドウに「Hello WebCamp」の文字が表示される


//複数の関数で表示できるようにする

//let promptStr = prompt('何か好きな文字を入力してください。');
//alert(promptStr);
//prooptStrの中に文字を入力できる。
//入力された文字列はprompt()関数の戻り値として変数「promptStr」に格納され、アラートウィンドウ上に表示される


//複数の関数を定義する
//let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

//alert('あなたの選んだ手は' + user_hand + 'です。');


// function getJShand(){
//   let js_hand_num = Math.floor( Math.random() * 3 );
//
//   if(js_hand_num == 0){
//     js_hand = "グー";
//   } else if(js_hand_num == 1){
//     js_hand = "チョキ";
//   } else if(js_hand_num == 2){
//     js_hand = "パー";
//   }
//
//   return js_hand;
// }