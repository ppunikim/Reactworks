import React from "react";

const b_flag_text = ["일반", "중요", "매우중요", "긴급"];

function BucketItem(props) {
  const { item, functions } = props;
  const { bucket_delete, bucket_flag_toggle, bucket_complete } = functions;

  /*
  react code에서 component간 계층 구조가 매우 복잡할 수 있다.
  복잡한 계층구조에서 데이터의 CRUD를 구현할 때
  데이터를 표출하기 위해 변수={값} 형식으로 자식comp에게 전달하고,
  자식 comp는 props를 통해 데이터를 받아 표출한다.
  이 때, 만약 자식 comp에서 부모 comp가 생성하고 선언한 state변수를 
  변경해야 할 경우가 발생하면 
  부모 comps 에서 state 변수를 변경하는 함수를 함께 만들어
  자식 comps에게 전달해 주어야 한다.

  지금 <td onClick={() => bucket_complete(item.b_id)}>의 코드를 보면
  현재 화면 comp에 선언된 td가 클릭됐을 때 bucket_complete함수를
  실행하고 있지만, 이 함수는 BucketMain에서 만들어 내려보낸 함수이다.
  */
  return (
    <tr className={item.b_end_date ? "cancel" : ""}>
      <td onClick={() => bucket_flag_toggle(item.b_id)}>
        {b_flag_text[item.b_flag % 4]}
      </td>
      <td>{item.b_start_date}</td>
      <td>{item.b_bucket}</td>
      <td onClick={() => bucket_complete(item.b_id)}>{item.b_end_date}</td>
      <td onClick={() => bucket_delete(item.b_id)}>&times;</td>
    </tr>
  );
}

export default BucketItem;
