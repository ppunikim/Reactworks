import React from "react";
import BucketItem from "./BucketItem";

const BucketList = (props) => {
  const { bucketList, bucket_delete } = props;

  //map은 for-each와 다르게 return 할 수 있다.
  //즉, 그 내용들을 새로운 변수(bucketBody)에 담을 수 있다.
  const bucketBody = bucketList.map((bucket) => {
    return <BucketItem item={bucket} bucket_delete={bucket_delete} />;
  });

  return (
    <table className="w3-table w3-table-all">
      <thead>
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
