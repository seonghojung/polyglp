import styled from "styled-components";
import Template from "../components/Template";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { useState } from "react";
import TableHeader from "./components/TableHeader";

const rows: GridRowsProp = [
  { id: 1, "신고 종류": "신고종류", 이름: "이름", 이메일: "이메일", 전화번호: "전화번호", 내용: "내용", "조치 내용": "조치내용", 경고누적: "경고누적", 등록일시: "등록일시" },
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
  { field: "신고 종류", headerName: "신고 종류", width: 150 },
  { field: "이름", headerName: "이름", width: 100 },
  { field: "이메일", headerName: "이메일", width: 200 },
  { field: "전화번호", headerName: "전화번호", width: 200 },
  { field: "내용", headerName: "내용", width: 200 },
  { field: "조치 내용", headerName: "조치 내용", width: 150 },
  { field: "경고누적", headerName: "경고누적", width: 100 },
  { field: "등록일시", headerName: "등록일시", width: 150 },
  {
    field: "처리하기",
    headerName: "처리하기",
    width: 100,
    renderCell: (rows) => (
      <button
        onClick={() => {
          alert(`${rows.id}번쨰 처리하기 버튼`);
        }}
      >
        처리하기
      </button>
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
              }}
              autoHeight
              rows={rows}
              columns={columns}
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
