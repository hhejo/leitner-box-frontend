import { Link, Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <div>
        <Link to="/">메인페이지</Link>
      </div>

      <div>
        <Link to={"cards/create"}>카드 생성하기</Link>
      </div>

      <div>
        <Link to={"cards/today"}>오늘 학습할 카드 보러가기</Link>
      </div>

      <div>오늘 학습할 카드는 ?개입니다.</div>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Root;
