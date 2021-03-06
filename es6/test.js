"use strict";
const sentences = [ // 定数の宣言
  { subject: "JavaScript", verb: "is", object: "great" },
  { subject: "Elephants", verb: "are", object: "large" },
];
function say({ subject, verb, object }) { // オブジェクトのデストラクチャリング
  console.log(`${subject} ${verb} ${object}`); // テンプレートリテラル
}
for(let s of sentences) { // for ... ofの構文とlet
  say(s);
}