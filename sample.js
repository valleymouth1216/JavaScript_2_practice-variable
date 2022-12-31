//変数宣言の種類
 //var あまり使わない
 //const 習慣的にすべて大文字を使うことが多い
 //let


// varによる再宣言
 // var nickname = "taro"
 // console.log(nickname)
 // var nickname = "ichiro"
 // console.log(nickname)
   //2行目はtaroと出力される
   //4行目はichiroと出力される

// letによる再宣言
 // let nickname = "taro"
 // console.log(nickname)
 // let nickname = "ichiro"
 // console.log(nickname)
   //nicknameは既に宣言されている為エラーになる


// varによる再代入
 //var nickname = "taro"
 //console.log(nickname)
 //nickname = "jiro"
 //console.log(nickname)
   //18行目はtaroと出力される
   //21行目はichiroと出力される nicknameという箱の中にを変えている


// letによる再代入
 //let nickname = "taro"
 //console.log(nickname)
 //nickname = "jiro"
 //console.log(nickname)
  //varと比べて特に変わらず


// constによる再代入
 //lconst nickname = "taro"
 //lconsole.log(nickname)
 //lnickname = "jiro"
 //lconsole.log(nickname)
   //エラーになる　constでは再宣言と再代入が出来ない



//スコープ(有効範囲)


//varのスコープ 関数スコープ(ローカルスコープ)、グローバルスコープの変数を宣言できる
 //グローバルスコープ・・・どこからでも参照できる変数
 //関数スコープ　　　・・・関数の中でvarによって宣言された変数
  //var str = "webcamp" //グローバルスコープ

  //function foo() {
   // console.log(str)
    //var y = "hello" //関数スコープ
  //}

  //foo()
  //console.log(y)

    //yはfooという関数の中でvarによって宣言された関数スコープになり
      //この場合、関数の外からyを参照しようとしても有効範囲外になりエラーになる
