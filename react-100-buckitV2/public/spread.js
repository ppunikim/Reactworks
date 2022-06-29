const json_array = [];

for (let i = 0; i < 10; i++) {
  const min = 10;
  const max = 100;
  const rnd = Math.floor(Math.random() * (max - min) + min);
  //console.log(rnd);
  json_array.push(rnd);
  console.log(json_array);
}
