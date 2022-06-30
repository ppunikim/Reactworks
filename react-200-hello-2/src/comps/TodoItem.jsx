import React from "react";

const TodoItem = (props) => {
  const { todo } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>시작시간</th>
          <th>내용</th>
          <th>끝난시간</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{todo.t_id}</td>
          <td>{todo.t_s_date}</td>
          <td>{todo.content}</td>
          <td>{todo.t_e_date}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TodoItem;
