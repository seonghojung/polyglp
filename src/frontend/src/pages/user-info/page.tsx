import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { useState } from "react";
import Template from "../components/Template";
import { BASE_URL } from "../../App";
import styled from "styled-components";
import { TextField } from "@mui/material";

// const rows: GridRowsProp = [
//   { id: 1, col1: "Hello", col2: "World", col3: "asdasd@naver.com" },
//   { id: 2, col1: "DataGridPro", col2: "is Awesome", col3: "asdasd@naver.com" },
//   { id: 3, col1: "MUI", col2: "is Amazing", col3: "asdasd@naver.com" },
// ];

// const columns: GridColDef[] = [
//   { field: "col1", headerName: "Column 1", width: 150 },
//   { field: "col2", headerName: "Column 2", width: 150 },
//   { field: "col3", headerName: "Column 3", width: 150 },
// ];

const Wrap = styled.div``;
const Form = styled.form``;
const FormWrap = styled.div``;
const Label = styled.label``;
const Input = styled.input``;
const Text = styled(TextField)`
  font-size: 20px;
`;
export default function UserInfoPage() {
  // 아트보드 : 1 회원 정보
  // WBS : 회원정보
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 });

  return (
    // <div style={{ height: 300, width: "100%" }}>
    //   <DataGrid autoHeight rows={rows} columns={columns} disableRowSelectionOnClick pageSizeOptions={[10, 25, 50]} paginationModel={paginationModel} onPaginationModelChange={setPaginationModel} />
    // </div>
    <div>
      <Template title="회원 정보 상세">
        <Wrap>
          <Form>
            {/* 닉네임 */}
            <FormWrap>
              <TextField label="닉네임" variant="standard" defaultValue="test" color="secondary" inputProps={{ style: { fontSize: "20px" } }} />
            </FormWrap>
            {/* 아이디 */}
            <FormWrap>
              <TextField label="아이디" variant="standard" defaultValue="thor@naver.com" color="secondary" inputProps={{ style: { fontSize: "20px" } }} />
            </FormWrap>
            {/* 이메일 */}
            <FormWrap>
              <TextField label="이메일" variant="standard" defaultValue="test" color="secondary" inputProps={{ style: { fontSize: "20px" } }} />
            </FormWrap>
            {/* 비밀번호 */}
            <FormWrap>
              <Label>비밀번호</Label>
              <Input type="password" name="password" placeholder="비밀번호"></Input>
              <Input type="password" name="confirmPassword" placeholder="비밀번호 확인"></Input>
            </FormWrap>
            {/* 성별 */}
            <FormWrap>
              <Label>성별</Label>
              <Input type="radio" name="male" placeholder="비밀번호"></Input>
              <Input type="password" name="female" placeholder="비밀번호 확인"></Input>
            </FormWrap>
            {/* 언어 */}
            <FormWrap>
              <Label>언어</Label>
              <Input value="thor@naver.com" readOnly></Input>
            </FormWrap>
            {/* 구독 */}
            <FormWrap>
              <Label>구독</Label>
              <Input value="thor@naver.com" readOnly></Input>
            </FormWrap>
          </Form>
        </Wrap>
      </Template>
    </div>
  );
}
