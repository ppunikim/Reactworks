const json_array = [];

for (let i = 0; i < 10; i++) {
  const min = 10;
  const max = 100;
  const rnd = Math.floor(Math.random() * (max - min) + min);

  //console.log(new_array);
  //console.log(rnd);
  json_array.push(rnd);
  console.log(json_array);
}

/*
JS에서 기존의 배열을 새로운 배열로 복제하는 경우가 자주 있다.
*/
const new_array1 = json_array.slice();
const new_array2 = Array.from(json_array);
const new_array3 = [];
for (let i = 0; i < json_array.length; i++) {
  new_array3[i] = json_array[i];
}
console.log("----------3----------");
console.log(new_array3);
console.log("---------4-----------");
const new_array4 = json_array.concat();
console.log(new_array4);
console.log("-----------5---------");
const new_array5 = json_array.map((item) => {
  return item;
});
console.log(new_array5);

/*배열의 확장: [...*] spread(확장, 펼치기)
   => *를 펼쳐서 앞에 담아라는 이야기.
*/
const new_array6 = [...json_array];
console.log("-----------7---------");
const new_array7 = [...json_array, 3, 4, 5, 6, 7, 8];
console.log(new_array7);

const book = {
  title: "뿌니보고싶다.",
  author: "햇살",
  comp: "우산동",
  price: 1000,
};
/*book JSON 객체에 원래는 없던 lang라는 속성의 값을 
  저장하는 코드를 만나면 ,lang속성을 추가하면서 
  book JSON객체가 변경돼버린다.
  객체의 속성이 추가, 변경 되는 것은 어떤 문제를 일으킬 수 있는
  준비가 됐다. 라고 봐도 된다.
*/
book.lang = "Korea";
console.log(book);

/**
 * JS에서 JSON, 배열 데이터를 다룰 때
 * 값을 변경하거나 할 때 기존 JSON배열을 변경하지 말고
 * 변경된 내용으로 새로운 JSON, 배열을 생성하여 데이터를 복제하고
 * 생성한 JSON, 배열의 내용을 변경하여 사용하도록 권장한다.
 *
 * 만약 spread사용하지 않는다면, 엄청 복잡하게 될 것이다.
 *
 * 또한 const book3 = book; 이라는 코드도 사용할 수 있는데,
 *      이렇게 사용할 때 내용을 변경하면, 다 같이 변경돼는 문제가 생긴다.
 * 그냥 복제할 땐 spread사용해라!!!!
 */
//기존의 book JSON객체를 spread(펼쳐)하여 book1에 복제하기
const book1 = { ...book };
console.log(book1);
//기존 코드를 변경하고 싶다면
const book2 = { ...book, title: "사랑스러운 뿌니" }; //spread의 첫 번째 방법
console.log(book2);
// spread한 것에서 추가한 부분만 바뀌게 된다.
/**이 코드는 book JSON을 복제하면서
 * title라는 속성을 "사랑스러운 뿌니"으로 세팅하여 바꾸고
 * 새로운 book2라는 JSON을 생성하기
 */
const { title, author, price, comp } = book; //spread의 두 번째 방법

const books = ["자바", "오라클", "MYSQL"];
const [자바, 오라클, MYSQL] = books;
/*
const 자바 = books[0]
const 오라클 = books[1]
const MYSQL = books[1]
*/
