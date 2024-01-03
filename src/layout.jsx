import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
