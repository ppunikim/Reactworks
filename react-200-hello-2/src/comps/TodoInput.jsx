const TodoInput = (props) => {
  const { insert_todo } = props;

  /**
   * input box 에 keybord로 문자열을 입력받는 중,
   * enter를 누르면 데이터를 TodoMain의 insert_todo에게 보내서
   * todoList에 추가해 달라고 요청을 할 것이다.
   */
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      //insert_todo 호출하며 입력된 todo 전송
      const todo = e.target.value;
      insert_todo(todo);
    }
  };

  return (
    <>
      {/* 
    input box onKeyDown 핸들러 등록 후,
    키보드 입력 감시하기
    */}
      <input
        placeholder="TODO INPUT"
        className="w3-input  w3-hover-light-gray"
        onKeyDown={onKeyDown}
      />
    </>
  );
};
export default TodoInput;
