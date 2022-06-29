import React from "react";
import BucketItem from "./BucketItem";

const BucketList = (props) => {
  const { bucketList, functions } = props;

  //map은 for-each와 다르게 return 할 수 있다.
  //즉, 그 내용들을 새로운 변수(bucketBody)에 담을 수 있다.
  const bucketBody = bucketList.map((bucket) => {
    return <BucketItem item={bucket} functions={functions} />;
  });

  return (
    <table className="w3-table w3-table-all">
      <thead>
        <th>중요도</th>
        <th>시작일</th>
        <th>BUCKET</th>
        <th>완료일</th>
        <th>취소</th>
      </thead>
      <tbody>{bucketBody}</tbody>
    </table>
  );
};

export default BucketList;
