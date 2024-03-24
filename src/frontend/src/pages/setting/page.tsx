import Templete from "../components/Template";
import styled from "styled-components";

const TopContent = styled.div`
  /* height: 232px; */
`;

const BodyContent = styled.div`
  /* width: 93.508287%; */
`;

export default function SettingPage() {
  // 아트보드 : 8. 설정
  // WBS : 설정

  return (
    <Templete title="설정">
      <>
        <TopContent>
          <div style={{ height: "118px", textAlign: "center", paddingTop: "100px" }}>상단 컨텐츠 영역</div>
        </TopContent>
        <BodyContent>
          <div style={{ height: 300, width: "100%" }}>
            <div style={{ height: "118px", textAlign: "center", paddingTop: "100px" }}>하단 컨텐츠 영역</div>
          </div>
        </BodyContent>
      </>
    </Templete>
  );
}
