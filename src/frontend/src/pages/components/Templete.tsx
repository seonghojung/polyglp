import styled from 'styled-components';

const Container = styled.div`
  padding: 54px 59px 59px 60px;
  max-width: 1448px;
  margin: 0 auto;
  /* margin: 54px auto 59px; */
`;

const Wrap = styled.div``;

const Header = styled.div`
  padding-bottom: 15px;
`;

const Title = styled.span`
  font-size: 36px;
  font-weight: 600;
  color: #280559;
  border-bottom: 4px solid #280559;
`;

const Templete = ({ children, title }: { children: React.ReactElement; title: string }) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
      {children}
    </Container>
  );
};

export default Templete;
