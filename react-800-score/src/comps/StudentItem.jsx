import { useScoreContext } from "../context/ScoreContextProvider";

const StudentItem = ({ student }) => {
  const { deleteStudent } = useScoreContext();
  const onDeleteEvent = (st_num) => {
    if (window.confirm(`${st_num} 학번 데이터를 삭제할거냐?`)) {
      deleteStudent(st_num);
    }
  };
  return (
    <tr>
      <td>{student.st_num}</td>
      <td>{student.st_name}</td>
      <td>{student.st_dept}</td>
      <td>{student.st_tel}</td>
      <td>{student.st_addr}</td>
      <td onClick={() => onDeleteEvent(student.st_num)}>&times;</td>
    </tr>
  );
};
export default StudentItem;
