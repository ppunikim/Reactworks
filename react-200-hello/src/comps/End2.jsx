const End2 = ({ name }) => {
  /**
   * 현재 comp에서만 사용할 수 있도록 Style을 지정하고
   * tag comp에 style keyword를 사용할 수 있도록 지정한다.
   * 단, style 의 속성 이름은 Kebab-case(font-Style)을 사용할 수 없고,
   * 마이너스 기호를 제거하고 CamelCase로 작성해야 한다.
   * 속성 값들은 반드시 문자열로 만들어야 한다.
   * 이건 마치 인라인 속성이라고 할 수 있다.
   */
  const h1Style = {
    color: "blue",
    fontStyle: "italic",
  };

  /**
   * jsx의 tag 규칙
   * 여러 tag들을 사용할 땐 반드시 가장 바깥쪽을 감싸는
   * group tag가 있어야 한다.
   * 예를 들어
   * <div></div>
   * <div></div>
   * <div></div>
   * <p></p>
   * 를 단독으로는 사용할 수 없고, 그것을 감싸는 테그가 나와야 한다.
   *
   * <div>
   *     <div></div>
   *    <div></div>
   *    <div></div>
   *    <p></p>
   * </div>
   *
   * <>
   *     <div></div>
   *    <div></div>
   *    <div></div>
   *    <p></p>
   * </>
   */
  return (
    <>
      <h1 style={h1Style}> End2 에서 내가 받은 name = {name}</h1>
    </>
  );
};
export default End2;
