import React from "react";
import BucketItem from "./BucketItem";

const BucketList = (props) => {
  const { bucketList, functions } = props;

  //map은 for-each와 다르게 return 할 수 있다.
  //즉, 그 내용들을 새로운 변수(bucketBody)에 담을 수 있다.

  /*map을 사용하여 list comps를 구현할 때
    각 라인의 설정에 UNIQUE적인 key값을 지정해줘야
    데이터를 rendering할 때 효율적으로 설정할 수 있다. */
  const bucketBody = bucketList.map((bucket) => {
    return <BucketItem item={bucket} functions={functions} key={bucket.b_id} />;
  });

  return (
    <table className="w3-table w3-table-all">
      <thead>
        <tr>
          <th>중요도</th>
          <th>시작일</th>
          <th>BUCKET</th>
          <th>완료일</th>
          <th>취소</th>
        </tr>
      </thead>
      <tbody>{bucketBody}</tbody>
    </table>
  );
};

export default BucketList;
