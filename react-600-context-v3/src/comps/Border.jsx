/*props.children 이라는 기본 속성이
  기본적으로 함수의 매개변수에 포함돼있다.
*/
/*border라는 함수 객체
  <Border>객체들<Border /> 형식으로 사용하면
  처음부터 존재하는 객체들처럼 새로운 합성된 객체가 된다.
  Border 라는 객체를 재 사용하는 것
*/
const Border = ({ children }) => {
  return <>{children}</>;
};

//layout함수 객체
const Layout = () => {
  return (
    <>
      <Border>
        <h1>반가워</h1>
        <p>합성을 이용한 Layout 구성</p>
      </Border>
      <Border>
        <h1>여기는 main section 이야</h1>
      </Border>
    </>
  );
};
export default Layout;
