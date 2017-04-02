
function showDoubleNot(val) {
  console.log("--------");
  console.log(`original: ${val}`);
  console.log(`not: ${!val}`);
  console.log(`double not: ${!!val}`);
}

showDoubleNot(0);
showDoubleNot(1);
showDoubleNot("str");

