import { useState } from "react";
import uuid from "react-uuid";
import moment from "moment";
import BucketList from "./BucketList";

/*
함수를 선언하고 함수에서 컴포넌트 코드를 return 한다.
이 때, return 내의 컴포넌트 tag의 가장 바깥을 감싸서
한 개의 tag로 묶어야 한다.
*/
const BucketMain = () => {
  /* buckList state변수를 배열로 선언
     state변수를 배열로 선언해 사용할 경우, 표준 JS코드에 있는
     배열에 요소를 추가하는 함수를 사용할 수 없다.(불변법칙)
     state배열에 요소를 추가하는 경우는 setter함수를 사용하는데
     이 함수가 작동되는 방식은 기존의 배열을 새로운 배열로 복사하고,
     (변하진 않고 교체 이루어진다.)
     요소를 추가한 후, 새로운 배열과 기존의 배열을 교환하는 방식으로 이루어진다.
  */
  const [bucketList, setBucketList] = useState([]);

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      const bucket = {
        b_id: uuid(), //uuid 를 사용해 Bucket PK 생성
        b_start_date: moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
        b_bucket: e.target.value,
        b_end_date: "",
      };
      setBucketList([...bucketList, bucket]);
      console.table(bucketList);
    }
  };

  const bucket_delete = (id) => {
    const bucketRemoveList = bucketList.filter((bucket) => {
      return bucket.b_id !== id;
    });
    setBucketList(bucketRemoveList);
  };
  return (
    <>
      <div>
        <input
          onKeyDown={onKeyDown}
          placeholder="버킷에 추가할 내용을 입력하세요."
          className="w3-input w3-border w3-hover-green w3-round"
        />
      </div>
      <div>
        <BucketList bucketList={bucketList} bucket_delete={bucket_delete} />
      </div>
    </>
  );
};
export default BucketMain;
