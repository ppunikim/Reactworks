const student = {
  st_num: 1,
  st_name: "햇살",
  st_grade: 4,
  st_dept: "컴공과",
};
console.table(student);

console.log(student.st_num);
console.log(student.st_name);

/*
js에서 JSON객체 데이터는 자체 const(read only) 로 선언해도
각 속성(요소 데이터)는 변경할 수 있다.
*/
student.st_dept = "전자과";
console.log(student);

/* JSON 객체 분해(펼치기, Spread)
 * student 객체에 저장된 값 중에서 st_name, st_dept속성에
 * 저장된 값만 추출하고, st_name, st_dept 단일변수를 선언해 저장해달라.
 */
// json을 일반 변수로 변환하는 코드이다.
const [st_name, st_dept] = student;
// js의 독특한 코드이다.
console.log(st_name, st_dept);
