import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      헤더
      <span style={{ marginRight: "10px" }}></span>
      <Link to="/">메인페이지</Link>
      <span style={{ marginRight: "10px" }}></span>
      <Link to={"cards/create"}>카드생성</Link>
      <span style={{ marginRight: "10px" }}></span>
      <Link to={"cards/today"}>오늘의학습카드</Link>
    </header>
  );
}

export default Header;
