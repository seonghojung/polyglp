import styled from "styled-components";

const Container = styled.div`
  padding: 54px 59px 59px 60px;
  max-width: 1448px;
  margin: 0 auto;
  /* margin: 54px auto 59px; */
`;

const Header = styled.div`
  padding-bottom: 15px;
`;

const Title = styled.span`
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
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Wrap>
        <Inner>{children}</Inner>
      </Wrap>
    </Container>
  );
};

export default Template;
