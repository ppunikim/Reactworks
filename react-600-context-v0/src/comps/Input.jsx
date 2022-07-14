// 입력할 수 있도록 만든 것.
//Main으로부터 전달받은 변수를 받기 위해 props선언
const Input = (props) => {
  //props로부터 address state변수 분해
  const { address, setAddress, addrList, setAddrList } = props;
  //address state변수로부터 각각 속성 분해하기
  const { ad_name, ad_tel, ad_addr } = address;

  /* input box의 value 속성에 변수를 설정하면 read Only가 된다.
     만약 input box에 키보드로 입력하려면 defaultValue를 사용해야 한다.
     하지만 defaultValue는 간혹 state의 특성을 제대로 발휘하지 못한다.
     그래서 보통 defaultValue보다는 value를 더 많이 사용한다.
    
     input box에 문자열을 키보드로 입력하려면 
     input box의 onChange event를 사용해 setState()함수를 통해 
     state변수에 값을 변경하도록 하는 코드를 작성해야 한다.

     - onChange 사용 방법
       : input box에 입력된 문자열을 onChange 이벤트가 가로채고
         가로챈 문자열을 setState 함수를 통해 state 변수를변경하고
         state의 rendering특성에 따라 input box에 문자열이 나타나는 
         코드가 된다.
    
  */
  const onChangeEvent = (e) => {
    /* e.target.name, e.target.value변수를
       각각 name, value 변수로 추출.

    */
    const { name, value } = e.target;
    /* 이 코드는 기존 address에 담긴 데이터를 복사하면서 
       [name] 변수에 해당하는 값만 변경된다. */
    setAddress({ ...address, [name]: value });
  };

  const onClickEvent = (e) => {
    /* addrList배열을 복제하고, 
       그곳에 복제한 address state 변수를 추가
       새로운 addrList를 setting
     */
    setAddrList([...addrList, address]);
  };
  return (
    <>
      <input
        onChange={onChangeEvent}
        name="ad_name"
        placeholder="이름"
        value={ad_name}
      />
      <input
        onChange={onChangeEvent}
        name="ad_tel"
        placeholder="전번"
        value={address.ad_tel}
      />
      <input
        onChange={onChangeEvent}
        name="ad_addr"
        placeholder="주소"
        value={props.address.ad_addr}
      />
      <button onClick={onClickEvent}>저장</button>
    </>
  );
};

export default Input;
