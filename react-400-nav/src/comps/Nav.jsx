import { Link } from "react-router-dom";

const Navi = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/todo">지금 할 일</Link>
      <Link to="/bucket">나의 버킷 리스트</Link>
    </nav>
  );
};

export default Navi;
