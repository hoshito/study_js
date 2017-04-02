
function showDoubleNot(val) {
  console.log("--------");
  console.log(`original: ${val}`);
  console.log(`not: ${!val}`);
  console.log(`double not: ${!!val}`);
}

const falseArr = [ undefined, null, false, 0, NaN, "" ];
for (let a of falseArr) {
  showDoubleNot(a);
}

const trueArr = [ {}, "false", 1, " " ];
for (let a of trueArr) {
  showDoubleNot(a);
}
