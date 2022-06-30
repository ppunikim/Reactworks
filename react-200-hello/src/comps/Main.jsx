import Sub from "./Sub";
const Main = () => {
  const comp = (
    <div>
      <h1>반가워</h1>
      <p>리엑트를 사용해 Component를 만드는 중~~</p>
      <p>3 + 4 = {3 + 4}</p>
      <Sub name="뿌니만세" />
    </div>
  );
  return comp;
};
export default Main;
