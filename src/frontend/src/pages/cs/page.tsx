import styled from "styled-components";
import Template from "../components/Template";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { useState } from "react";
import TableHeader from "./components/TableHeader";
import { Button } from "@mui/material";

const rows: GridRowsProp = [
  {
    id: 1,
    "신고 종류": "너신고",
    이름: "제이크",
    이메일: "jake@codespace.im",
    전화번호: "010-4874-2157",
    내용: "만약내가이렇게내용을쓴다면 어떻게나올까요?이게 참 어떻게나올지 정말궁금한데, 제대로 잘 나왔으면 좋겠어요.",
    "조치 내용": "무죄방면",
    경고누적: "누적없음",
    등록일시: "2024-03-24 16:09:23",
  },
  { id: 2, "신고 종류": "신고종류", 이름: "이름", 이메일: "이메일", 전화번호: "전화번호", 내용: "내용", "조치 내용": "조치내용", 경고누적: "경고누적", 등록일시: "등록일시" },
  { id: 3, "신고 종류": "신고종류", 이름: "이름", 이메일: "이메일", 전화번호: "전화번호", 내용: "내용", "조치 내용": "조치내용", 경고누적: "경고누적", 등록일시: "등록일시" },
  { id: 4, "신고 종류": "신고종류", 이름: "이름", 이메일: "이메일", 전화번호: "전화번호", 내용: "내용", "조치 내용": "조치내용", 경고누적: "경고누적", 등록일시: "등록일시" },
  { id: 5, "신고 종류": "신고종류", 이름: "이름", 이메일: "이메일", 전화번호: "전화번호", 내용: "내용", "조치 내용": "조치내용", 경고누적: "경고누적", 등록일시: "등록일시" },
  { id: 6, "신고 종류": "신고종류", 이름: "이름", 이메일: "이메일", 전화번호: "전화번호", 내용: "내용", "조치 내용": "조치내용", 경고누적: "경고누적", 등록일시: "등록일시" },
  { id: 7, "신고 종류": "신고종류", 이름: "이름", 이메일: "이메일", 전화번호: "전화번호", 내용: "내용", "조치 내용": "조치내용", 경고누적: "경고누적", 등록일시: "등록일시" },
  { id: 8, "신고 종류": "신고종류", 이름: "이름", 이메일: "이메일", 전화번호: "전화번호", 내용: "내용", "조치 내용": "조치내용", 경고누적: "경고누적", 등록일시: "등록일시" },
  { id: 9, "신고 종류": "신고종류", 이름: "이름", 이메일: "이메일", 전화번호: "전화번호", 내용: "내용", "조치 내용": "조치내용", 경고누적: "경고누적", 등록일시: "등록일시" },
  { id: 10, "신고 종류": "신고종류", 이름: "이름", 이메일: "이메일", 전화번호: "전화번호", 내용: "내용", "조치 내용": "조치내용", 경고누적: "경고누적", 등록일시: "등록일시" },
  { id: 11, "신고 종류": "신고종류", 이름: "이름", 이메일: "이메일", 전화번호: "전화번호", 내용: "내용", "조치 내용": "조치내용", 경고누적: "경고누적", 등록일시: "등록일시" },
  { id: 12, "신고 종류": "신고종류", 이름: "이름", 이메일: "이메일", 전화번호: "전화번호", 내용: "내용", "조치 내용": "조치내용", 경고누적: "경고누적", 등록일시: "등록일시" },
  { id: 13, "신고 종류": "신고종류", 이름: "이름", 이메일: "이메일", 전화번호: "전화번호", 내용: "내용", "조치 내용": "조치내용", 경고누적: "경고누적", 등록일시: "등록일시" },
];

const columns: GridColDef[] = [
  { field: "신고 종류", headerName: "신고 종류", width: 110 },
  { field: "이름", headerName: "이름", width: 110 },
  { field: "이메일", headerName: "이메일", width: 150 },
  { field: "전화번호", headerName: "전화번호", width: 180 },
  { field: "내용", headerName: "내용", width: 250 },
  { field: "조치 내용", headerName: "조치 내용", width: 150 },
  { field: "경고누적", headerName: "경고누적", width: 100 },
  { field: "등록일시", headerName: "등록일시", width: 170 },
  {
    field: "처리하기",
    headerName: "처리하기",
    width: 100,
    renderCell: (rows) => (
      <Button
        sx={{
          backgroundColor: "#00b9fd",
          ":hover": { backgroundColor: "#00a0db" },
        }}
        type="button"
        variant="contained"
        size="small"
        onClick={() => {
          alert(`${rows.id}번쨰 처리하기 버튼`);
        }}
      >
        처리하기
      </Button>
    ),
  },
];

const TopContent = styled.div`
  /* height: 232px; */
`;

const BodyContent = styled.div`
  /* width: 93.508287%; */
`;

export default function CsPage() {
  // 아트보드 : 2. CS 관리
  // WBS : CS 관리
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 });

  return (
    <Template title="CS관리">
      <>
        <TopContent>
          <TableHeader setNoticeList={() => {}} />
        </TopContent>
        <BodyContent>
          <div style={{ width: "100%" }}>
            <DataGrid
              sx={{
                "& .MuiDataGrid-cell:focus-within, &.MuiDataGrid-cell:focus": {
                  outline: "none",
                },
                "& .MuiDataGrid-columnHeader:focus-within, &.MuiDataGrid-columnHeader:focus": {
                  outline: "none",
                },
                "&.MuiDataGrid-root": {
                  border: "none",
                },
                "& .MuiDataGrid-sortIcon": {
                  display: "none",
                },
                "& .MuiDataGrid-menuIconButton": {
                  display: "none",
                },
                "& .MuiDataGrid-row.Mui-hovered": {
                  backgroundColor: "transparent",
                },
                "& .MuiDataGrid-row:hover": {
                  backgroundColor: "transparent",
                },
                "& .MuiDataGrid-cell": {
                  border: "none",
                },
                "& .MuiDataGrid-cellContent": {
                  color: "#9e9e9e",
                },
              }}
              autoHeight
              rows={rows}
              columns={columns}
              rowHeight={80}
              disableRowSelectionOnClick
              pageSizeOptions={[10, 25, 50]}
              paginationModel={paginationModel}
              onPaginationModelChange={setPaginationModel}
            />
          </div>
        </BodyContent>
      </>
    </Template>
  );
}
