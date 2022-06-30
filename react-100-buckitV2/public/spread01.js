const arrays = Array(1000 * 1000);

let start = new Date();
const new_array1 = [];
for (let i = 0; i < arrays.length; i++) {
  new_array1[i] = arrays[i];
}
console.log(new Date() - start);

start = new Date();
const new_array2 = [...arrays];
console.log(new Date() - start);
// 이 코드는 spread의 속도(성능) 비교 코드이다.
