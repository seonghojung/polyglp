import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Dispatch, SetStateAction, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import styled from "styled-components";

const CountWrap = styled.div`
  width: 287px;
  height: 146px;
  border-radius: 15px;
  border: solid 1px #a0a0a0;
  background-color: #fff;

  &:nth-child(2) {
    margin-left: 26px;
  }
`;

const CountTitle = styled.div`
  margin-top: 38px;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: #280559;
`;

const CountValue = styled.div`
  margin-top: 18px;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: #0f0f0f;
`;

const TableHeader = ({ setNoticeList }: { setNoticeList: Dispatch<SetStateAction<any[]>> }) => {
  const [category, setCategory] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");

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
      <Box sx={{ rowGap: 2, display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "inital" }}>
        <ReportCount state="pending" count={1000} />
        <ReportCount state="complete" count={1000} />
      </Box>
      <Button sx={{ height: "48px", backgroundColor: "red", "& . MuiButton-root:hover": { backgroundColor: "white" } }} type="button" variant="contained" size="large" onClick={() => {}}>
        미처리 건만
      </Button>
      <Button sx={{ height: "48px" }} type="button" variant="contained" size="large" onClick={() => {}}>
        답변 완료만
      </Button>
      <Button sx={{ height: "48px" }} type="button" variant="contained" size="large" onClick={() => {}}>
        전체 보기
      </Button>
    </Box>
  );
};

export default TableHeader;

//components

interface ReportCount {
  state: "pending" | "complete";
  count: number;
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
