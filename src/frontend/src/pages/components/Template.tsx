import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { isSidebarCollapsedAtom } from '../../Atom';

export const Header = styled.div`
  padding-bottom: 15px;
`;

export const Title = styled.span`
  font-size: 36px;
  font-weight: 600;
  color: #280559;
  border-bottom: 4px solid #280559;
`;

const Wrap = styled.div`
  /* width: 89.108%; */

  margin-top: 102px;
  /* height: calc(100vh - 273px); */
  background-color: #fff;
  border-radius: 10px;
`;

const Inner = styled.div`
  padding: 0 47px;
`;

const Template = ({ children, title }: { children: React.ReactElement; title: string }) => {
  const isSidebarCollapsed = useRecoilValue(isSidebarCollapsedAtom);

  console.log(isSidebarCollapsed, '?');

  return (
    <>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Wrap>
        <Inner>{children}</Inner>
      </Wrap>
    </>
  );
};

export default Template;
