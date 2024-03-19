import styled from 'styled-components';
import Templete from '../components/Templete';

export const Container = styled.div`
  padding: 54px 59px 59px 60px;
`;

export const Header = styled.div`
  padding-bottom: 15px;
`;

const Wrap = styled.div`
  /* width: 89.108%; */
  margin-top: 102px;
  height: calc(100vh - 273px);
  background-color: #fff;
`;

const TopContent = styled.div`
  height: 232px;
`;

const BodyContent = styled.div`
  /* width: 93.508287%; */
`;

const Table = styled.table`
  min-width: 1448px;
  table-layout: fixed;
`;

const Thead = styled.thead`
  /* padding: 11px 43px 11px 32px; */
  display: block;
`;

const BorderWrap = styled.div`
  padding: 11px 0;
  border-bottom: 2px solid #280559;
`;

const TitleWrap = styled.div`
  display: flex;
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #333;
  text-align: center;
`;

const Title1 = styled(Title)`
  width: 100px;
`;
const Title2 = styled(Title)`
  width: 125px;
`;
const Title3 = styled(Title)`
  width: 200px;
`;
const Title4 = styled(Title)`
  width: 200px;
`;
const Title5 = styled(Title)`
  width: 250px;
`;
const Title6 = styled(Title)`
  width: 125px;
`;
const Title7 = styled(Title)`
  width: 125px;
`;
const Title8 = styled(Title)`
  width: 150px;
`;
const Title9 = styled(Title)`
  width: 100px;
`;

const Tdata = styled.div`
  padding: 11px 43px 11px 32px;
  height: 606px;
  overflow: auto;
`;

const Test = styled.div`
  height: 250px;
`;

const Pagination = styled.div`
  text-align: center;
`;

export default function CsPage() {
  // 아트보드 : 2. CS 관리
  // WBS : CS 관리

  return (
    <Templete title="CS관리">
      <Wrap>
        <TopContent>
          <div>상단컨텐츠들</div>
        </TopContent>
        <BodyContent>
          <Table>
            <Thead>
              <tr>
                <BorderWrap>
                  <TitleWrap>
                    <Title1>신고종류</Title1>
                    <Title2>이름</Title2>
                    <Title3>이메일</Title3>
                    <Title4>전화번호</Title4>
                    <Title5>내용</Title5>
                    <Title6>조치 내용</Title6>
                    <Title7>경고누적</Title7>
                    <Title8>등록일시</Title8>
                    <Title9>처리하기</Title9>
                  </TitleWrap>
                </BorderWrap>
              </tr>
            </Thead>
            <Tdata>
              <Test>컴포넌트가 올예정</Test>
              <Test>컴포넌트가 올예정</Test>
              <Test>컴포넌트가 올예정</Test>
            </Tdata>
          </Table>
        </BodyContent>
        <Pagination>{'<< 1 / 2 / 3 >>'}</Pagination>
      </Wrap>
    </Templete>
  );
}
