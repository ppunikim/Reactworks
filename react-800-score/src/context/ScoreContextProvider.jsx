import { useContext, createContext, useState, useEffect } from "react";

const useScoreContext = () => {
  return useContext(ScoreContext);
};

const ScoreContext = createContext();
const ScoreContextProvider = ({ children }) => {
  //입력한 text를 저장할 공간
  const [student, setStudent] = useState({
    st_num: "",
    st_name: "",
    st_dept: "",
    st_tel: "",
    st_addr: "",
  });
  // API 서버에서 학생 리스트 가져와 저장할 state배열
  const [studentList, setStudentList] = useState([]);

  const fetchStudent = async () => {
    const response = await fetch("/api/student");
    const stdList = await response.json();
    setStudentList(stdList);
  };

  const deleteStudent = async (st_num) => {
    const response = await fetch(
      `http://localhost:8080/score/api/student/${st_num}/delete`
    );
    const result = await response.text();
    if (result === "OK") {
      alert("삭제가 됨");
      fetchStudent();
    } else {
      alert("삭제 도중 오류 발생");
    }
  };

  const stNumCheck = async (st_num) => {
    const response = await fetch(`/api/student/${st_num}/check`);
  };

  const insertStudent = async () => {
    const fetchData = {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(student),
    };
    const response = await fetch("/api/student/insert", fetchData);
    const result = await response.text();
    if (result === "OK") {
      alert("데이터 정상 추가됐다.");
    } else {
      alert("데이터 추가 실패다.");
    }
  };

  useEffect(() => {
    fetchStudent();
  }, []);
  //state변수와 함수를 저장하기 위한 보관용 창고
  const props = {
    studentList,
    setStudentList,
    student,
    setStudent,
    deleteStudent,
    insertStudent,
  };

  return (
    <ScoreContext.Provider value={props}>{children}</ScoreContext.Provider>
  );
};

export { ScoreContextProvider, useScoreContext };
