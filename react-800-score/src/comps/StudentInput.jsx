import { useState } from "react";
import { useScoreContext } from "../context/ScoreContextProvider";
import StudentList from "./StudentList";

const StudentInput = () => {
  const { student, setStudent, insertStudent } = useScoreContext();

  const onChangeEvent = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };
  const onChangeStNum = (e) => {
    const value = e.target.value;
    if (value.length === 5) {
      alert(value);
    }
    setStudent({ ...student, st_num: value.toUpperCase() });
  };
  return (
    <div className="w3-container w3-row">
      <input
        onChange={onChangeStNum}
        name="st_num"
        value={student.st_num}
        className="w3-col l3 w3-margin"
        placeholder="학번"
      />
      <input
        onChange={onChangeEvent}
        name="st_name"
        value={student.st_name}
        className="w3-col l3 w3-margin"
        placeholder="이름"
      />
      <input
        onChange={onChangeEvent}
        name="st_dept"
        value={student.st_dept}
        className="w3-col l3 w3-margin"
        placeholder="학과"
      />
      <input
        onChange={onChangeEvent}
        name="st_tel"
        value={student.st_tel}
        className="w3-col l3 w3-margin"
        placeholder="전번"
      />
      <input
        onChange={onChangeEvent}
        name="st_addr"
        value={student.st_addr}
        className="w3-col l3 w3-margin"
        placeholder="주소"
      />
      <button
        className="w3-button w3-yellow w3-col l3 w3-margin"
        onClick={insertStudent}
      >
        저장
      </button>
    </div>
  );
};
export default StudentInput;
