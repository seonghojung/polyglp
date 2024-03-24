import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Dispatch, SetStateAction, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import styled from "styled-components";

const CountWrap = styled.div`
  display: flex;
  &:nth-child(2) {
    margin-top: 20px;
  }
`;

const CountTitle = styled.div`
  width: 170px;
  font-size: 24px;
  font-weight: 500;
  text-align: left;
  color: #280559;
`;

const CountValue = styled.div`
  margin-left: 20px;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: #0f0f0f;
`;

type ActiveButton = "unprocessed" | "completed" | "all" | null;

const TableHeader = ({ setNoticeList }: { setNoticeList: Dispatch<SetStateAction<any[]>> }) => {
  const [activeButton, setActiveButton] = useState<ActiveButton>("unprocessed");

  const handleClick = (type: ActiveButton) => {
    setActiveButton(type);
  };

  const value = (1000).toLocaleString();

  return (
    <Box
      sx={{
        py: 4,
        rowGap: 2,
        columnGap: 4,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-start",
      }}
    >
      {/* TODO: Submit */}
      <Box sx={{ display: "flex" }}>
        <div>
          <ReportCount state="pending" count={value} />
          <ReportCount state="complete" count={value} />
        </div>
        <Box sx={{ display: "flex", gap: "20px", marginLeft: "80px" }}>
          <SortBtn activeButton={activeButton} type="unprocessed" text="미처리 건만" handler={() => handleClick("unprocessed")} />
          <SortBtn activeButton={activeButton} type="completed" text="답변 완료만" handler={() => handleClick("completed")} />
          <SortBtn activeButton={activeButton} type="all" text="전체 보기" handler={() => handleClick("all")} />
        </Box>
      </Box>
    </Box>
  );
};

export default TableHeader;

//components

interface ReportCount {
  state: "pending" | "complete";
  count: string;
}

const ReportCount = ({ state, count }: ReportCount) => {
  const text = state === "pending" ? "미처리" : "처리";
  return (
    <CountWrap>
      <CountTitle>신고 건수({text})</CountTitle>
      <CountValue>{count}</CountValue>
    </CountWrap>
  );
};

interface ISortBtn {
  handler: () => void;
  activeButton: ActiveButton;
  type: ActiveButton; // 'unprocessed', 'completed', 'all' 중 하나
  text: string; // 버튼에 표시될 텍스트
}

const SortBtn = ({ handler, activeButton, type, text }: ISortBtn) => {
  return (
    <Button
      sx={{
        height: "48px",
        backgroundColor: activeButton === type ? "#00b9fd" : "#9a9a9a",
        ":hover": { backgroundColor: activeButton === type ? "#00a0db" : "#727272" },
      }}
      type="button"
      variant="contained"
      size="large"
      onClick={handler}
    >
      {text}
    </Button>
  );
};
