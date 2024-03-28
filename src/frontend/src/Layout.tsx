import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { styled } from 'styled-components';
import { useRecoilValue } from 'recoil';
import { isSidebarCollapsedAtom } from './Atom';

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

export const Container = styled.div`
  padding: 54px 59px 85px 410px;
  max-width: 1448px;
  margin: 0 auto;
  min-height: calc(100vh - 116px);
  transition: padding 0.3s ease-in-out;
  overflow: auto;
  &.collapsed {
    padding: 54px 59px 59px 176px;
    transition: padding 0.3s ease-in-out;
  }
`;

export default function Layout() {
  const isSidebarCollapsed = useRecoilValue(isSidebarCollapsedAtom);

  return (
    <Wrap>
      <Sidebar />
      <Body>
        <Container className={isSidebarCollapsed ? 'collapsed' : ''}>
          <Outlet />
        </Container>
      </Body>
    </Wrap>
  );
}

// const Sidebar = () => {};
