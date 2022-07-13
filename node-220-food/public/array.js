// 객체 펼치기, 비 구조화, 분해

// kk변수에 '우리나라'문자열을 담아라
const nation = { KK: "우리나라", K1: "Korea" };
const { KK, K1 } = nation;
console.log("1)", KK);

/* 
[1,2,3] 가 담긴 배열을 각각 분해해 
변수 a,b,c를 생성하고 각 요소를 변수에 담아라
*/
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c);
