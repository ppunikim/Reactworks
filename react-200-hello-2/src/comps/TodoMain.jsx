import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
const TodoMain = () => {
  return (
    <div className="w3-container w3-margin">
      <TodoList />
      <TodoInput />
    </div>
  );
};

export default TodoMain;
