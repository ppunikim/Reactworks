import { useContext, createContext, useState, useEffect } from "react";

const useScoreContext = () => {
  return useContext(ScoreContext);
};

const ScoreContext = createContext();
const ScoreContextProvider = ({ children }) => {
  // API 서버에서 학생 리스트 가져와 저장할 state배열
  const [studentList, setStudentList] = useState([]);

  const fetchStudent = async () => {
    const response = await fetch("/api/student");
    const stdList = await response.json();
    setStudentList(stdList);
  };

  useEffect(() => {
    fetchStudent();
  }, []);
  const props = {
    studentList,
    setStudentList,
  };

  return (
    <ScoreContext.Provider value={props}>{children}</ScoreContext.Provider>
  );
};

export { ScoreContextProvider, useScoreContext };
