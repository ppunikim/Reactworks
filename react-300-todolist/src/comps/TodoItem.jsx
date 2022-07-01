import React from "react";

const TodoItem = (props) => {
  const { todo, index } = props;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{todo.t_s_date}</td>
      <td>{todo.content}</td>
      <td>{todo.t_e_date}</td>
    </tr>
  );
};

export default TodoItem;
