import styled from "styled-components";

export const Container = styled.div`
  padding: 54px 59px 59px 60px;
`;

export const Header = styled.div`
  padding-bottom: 15px;
`;

interface ITitle {
  t: number;
}

export const Title1 = styled.div<ITitle>`
  width: ${(props) => props.t}px;
  font-size: 15px;
  font-weight: 600;
  color: #333;
`;

const Title = styled.span`
  font-size: 36px;
  font-weight: 600;
  color: #280559;
  border-bottom: 4px solid #280559;
`;

const Wrap = styled.div`
  margin-top: 102px;
  height: calc(100vh - 273px);
  background-color: #fff;
`;

const Templete = ({ children }: { children: React.ReactElement }) => {
  return (
    <Container>
      <Header>
        <Title>CS관리</Title>
      </Header>
      {children}
    </Container>
  );
};

export default Templete;
