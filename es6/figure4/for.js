const arr = ["a", "b", "c", "d", "e"];

for (let i = 0; i < arr.length; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

for (let i in arr) {
  console.log(i); // 0, 1, 2, 3, 4
}

for (let i of arr) {
  console.log(i); // a, b, c, d, e
}


const obj = { k1: "val1", k2: "val2", k3: "val3" };

for (let i = 0; i < obj.length; i++) {
  console.log(i); // 入らない
}

for (let i in obj) {
  console.log(i); // k1, k2, k3
}
/*
for (let i of obj) { // エラーになる
  console.log(i);
}*/