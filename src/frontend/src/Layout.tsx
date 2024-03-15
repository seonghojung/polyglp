import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div>
      <header>헤더</header>
      <Outlet />
      <footer>푸터</footer>
    </div>
  );
}

const Sidebar = () => {};
