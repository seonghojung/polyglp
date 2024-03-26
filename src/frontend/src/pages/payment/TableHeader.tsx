import Box from "@mui/material/Box";
import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import SortBtn from "../../components/SortBtn";
import { Button, FormControl, TextField } from "@mui/material";

const CountWrap = styled.div`
  display: flex;
  &:nth-child(2) {
    margin-top: 57px;
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

const Form = styled.form``;

const FormControlWrap = styled(FormControl)`
  &:not(:first-child) {
    margin-top: 40px;
  }
  display: flex !important;
  align-items: center;
  flex-direction: row !important;
`;

const TextFieldWrap = styled(TextField)`
  font-size: 20px;
`;

// SortBtn의 케이스 선언
type ActiveButton = "paidUser" | "nonPayingUser" | "all" | null;

const TableHeader = ({ setNoticeList }: { setNoticeList: Dispatch<SetStateAction<any[]>> }) => {
  const [activeButton, setActiveButton] = useState<ActiveButton>("paidUser");

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
        alignItems: "flex-start",
        justifyContent: "space-between",
      }}
    >
      {/* TODO: Submit */}
      <div style={{ display: "flex" }}>
        <div style={{ marginLeft: "20px" }}>
          <ReportCount state="pending" count={value} />
          <ReportCount state="complete" count={value} />
        </div>
      </div>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", marginLeft: "80px" }}>
        <Form>
          <FormControlWrap
            sx={{
              "& .MuiTextField-root": { width: "300px" },
            }}
          >
            <TextFieldWrap label="검색" placeholder="닉네임, 이메일 주소로 검색" variant="outlined" size="medium" />
            <Button
              sx={{
                width: "120px",
                height: "48px",
                marginLeft: "20px",
                backgroundColor: "#232D82",
                ":hover": { backgroundColor: "#1b2264" },
              }}
              type="button"
              variant="contained"
              size="large"
            >
              검색
            </Button>
          </FormControlWrap>
        </Form>

        <div style={{ display: "flex", gap: "20px" }}>
          <SortBtn activeButton={activeButton} type="paidUser" text="결제 유저만" handler={() => handleClick("paidUser")} />
          <SortBtn activeButton={activeButton} type="nonPayingUser" text="비결제 구독자만" handler={() => handleClick("nonPayingUser")} />
          <SortBtn activeButton={activeButton} type="all" text="전체 보기" handler={() => handleClick("all")} />
        </div>
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
