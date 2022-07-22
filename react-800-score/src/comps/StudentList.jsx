import { useScoreContext } from "../context/ScoreContextProvider";
import StudentItem from "./StudentItem";
const StudentList = () => {
  const { studentList } = useScoreContext();
  /*each 계열인 map, forEach를 사용해 반복문으로 Component List를 만들 때
    반드시 요소에 Key변수 값을 세팅해줘야 한다.
    같은 유형의 리스트가 다수 화면에 그려진 후 일부 List요소가 변경될 때
    react에 변경된 요소를 추적할 수 있는 Unique한 Key가 필요하다.
    key={PK} 로 반드시 지정해 줘야 한다.
  */
  const studentBody = studentList.map((student) => {
    return <StudentItem student={student} key={student.st_num} />;
  });
  return (
    <table className="w3-table w3-table-all w3-hoverable">
      <thead>
        <tr>
          <th>학번</th>
          <th>이름</th>
          <th>학과</th>
          <th>전화번호</th>
          <th>주소</th>
          <th>비고</th>
        </tr>
      </thead>
      <tbody>{studentBody}</tbody>
    </table>
  );
};
export default StudentList;
