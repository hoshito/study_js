const RED = Symbol();
const BLUE = Symbol();
const ORANGE = Symbol("夕日の色");
console.log(RED); // Symbol()
console.log(ORANGE); // Symbol(夕日の色)
console.log(RED === BLUE); // false
console.log(RED === ORANGE); // false （シンボルはすべてユニーク）
console.log(typeof RED); // symbol

console.log("===================");

const obj = {};
obj.color = "黄色";
obj["not an identifier"] = 3;
console.log(obj["not an identifier"]); // 3

const SIZE = Symbol();
obj[SIZE] = 8;
console.log(obj[SIZE]); // 8
console.log(obj); // { color: '黄色', 'not an identifier': 3 }