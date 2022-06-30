import React from "react";

const TodoItem = (props) => {
  const { item } = props;
  return (
    <tr>
      <td>{item.content}</td>
    </tr>
  );
};

export default TodoItem;
