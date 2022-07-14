const View = ({ address }) => {
  const { ad_name, ad_tel, ad_addr } = address;
  return (
    <>
      <div>
        <strong>이름 : </strong>
        <span>{ad_name}</span>
      </div>
      <div>
        <strong>전화번호 : </strong>
        <span>{ad_tel}</span>
      </div>
      <strong>주소 : </strong>
      <span>{ad_addr}</span>
    </>
  );
};

export default View;
