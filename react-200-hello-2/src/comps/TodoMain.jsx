import { useState } from "react";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoMain = () => {
  const [todoList, setTodoList] = useState([]);
  const insert_todo = (content) => {
    //여기는 todo INPUT이 전달해준 todo를 todoList에 추가하는 것.
    const todo = {
      content,
    };
    /* todoList배열을 모두 복사하고, 끝에 todo를 추가해
       todoBody배열을 생성해라는 의미다.
     */
    const todoBody = [...todoList, todo];
    setTodoList(todoBody);
  };
  return (
    <div className="w3-container w3-margin">
      {/** todoInput야 insert_todo함수를 너에게 보낸다. */}
      <TodoInput insert_todo={insert_todo} />
      <TodoList todoList={todoList} />
    </div>
  );
};

export default TodoMain;
