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
const nickname = "taro"
console.log(nickname)
nickname = "jiro"
console.log(nickname)