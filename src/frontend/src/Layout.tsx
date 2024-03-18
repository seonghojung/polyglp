import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
export default function Layout() {
  return (
    <div>
      <Sidebar />
      <header>헤더</header>
      <Outlet />
      <footer>푸터</footer>
    </div>
  );
}

// const Sidebar = () => {};
