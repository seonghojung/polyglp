import Template from "../components/Template";
import styled from "styled-components";

const TopContent = styled.div`
  /* height: 232px; */
`;

const BodyContent = styled.div`
  /* width: 93.508287%; */
`;

export default function ChattingSessionPage() {
  // 아트보드 : 6. 채팅방 세션
  // WBS : 채팅방 세션

  return (
    <Template title="채팅방 세션">
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
    </Template>
  );
}
