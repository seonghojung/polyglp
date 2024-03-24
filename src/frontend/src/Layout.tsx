import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { styled } from "styled-components";

const Wrap = styled.div`
  display: flex;
  background-color: #e8e9eb;
`;

const Header = styled.header`
  height: 199px;
`;

const Body = styled.div`
  width: 100%;
  overflow: auto;
`;

export default function Layout() {
  return (
    <Wrap>
      <Sidebar />
      <Body>
        <Outlet />
      </Body>
    </Wrap>
  );
}

// const Sidebar = () => {};
