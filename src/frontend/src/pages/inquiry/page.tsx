import styled from "styled-components";
import Template from "../components/Template";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { useState } from "react";

const rows: GridRowsProp = [
  { id: 1, "문의 종류": "문의종류", 이름: "이름", 이메일: "이메일", 전화번호: "전화번호", 내용: "내용", "답변 내용": "답변내용", 상태: "상태", 등록일시: "등록일시" },
  { id: 2, "문의 종류": "문의종류", 이름: "이름", 이메일: "이메일", 전화번호: "전화번호", 내용: "내용", "답변 내용": "답변내용", 상태: "상태", 등록일시: "등록일시" },
  { id: 3, "문의 종류": "문의종류", 이름: "이름", 이메일: "이메일", 전화번호: "전화번호", 내용: "내용", "답변 내용": "답변내용", 상태: "상태", 등록일시: "등록일시" },
  { id: 4, "문의 종류": "문의종류", 이름: "이름", 이메일: "이메일", 전화번호: "전화번호", 내용: "내용", "답변 내용": "답변내용", 상태: "상태", 등록일시: "등록일시" },
  { id: 5, "문의 종류": "문의종류", 이름: "이름", 이메일: "이메일", 전화번호: "전화번호", 내용: "내용", "답변 내용": "답변내용", 상태: "상태", 등록일시: "등록일시" },
  { id: 6, "문의 종류": "문의종류", 이름: "이름", 이메일: "이메일", 전화번호: "전화번호", 내용: "내용", "답변 내용": "답변내용", 상태: "상태", 등록일시: "등록일시" },
  { id: 7, "문의 종류": "문의종류", 이름: "이름", 이메일: "이메일", 전화번호: "전화번호", 내용: "내용", "답변 내용": "답변내용", 상태: "상태", 등록일시: "등록일시" },
  { id: 8, "문의 종류": "문의종류", 이름: "이름", 이메일: "이메일", 전화번호: "전화번호", 내용: "내용", "답변 내용": "답변내용", 상태: "상태", 등록일시: "등록일시" },
  { id: 9, "문의 종류": "문의종류", 이름: "이름", 이메일: "이메일", 전화번호: "전화번호", 내용: "내용", "답변 내용": "답변내용", 상태: "상태", 등록일시: "등록일시" },
  { id: 10, "문의 종류": "문의종류", 이름: "이름", 이메일: "이메일", 전화번호: "전화번호", 내용: "내용", "답변 내용": "답변내용", 상태: "상태", 등록일시: "등록일시" },
  { id: 11, "문의 종류": "문의종류", 이름: "이름", 이메일: "이메일", 전화번호: "전화번호", 내용: "내용", "답변 내용": "답변내용", 상태: "상태", 등록일시: "등록일시" },
  { id: 12, "문의 종류": "문의종류", 이름: "이름", 이메일: "이메일", 전화번호: "전화번호", 내용: "내용", "답변 내용": "답변내용", 상태: "상태", 등록일시: "등록일시" },
  { id: 13, "문의 종류": "문의종류", 이름: "이름", 이메일: "이메일", 전화번호: "전화번호", 내용: "내용", "답변 내용": "답변내용", 상태: "상태", 등록일시: "등록일시" },
];

const columns: GridColDef[] = [
  { field: "문의 종류", headerName: "문의 종류", width: 100 },
  { field: "이름", headerName: "이름", width: 100 },
  { field: "이메일", headerName: "이메일", width: 150 },
  { field: "전화번호", headerName: "전화번호", width: 150 },
  { field: "내용", headerName: "내용", width: 200 },
  { field: "답변 내용", headerName: "답변 내용", width: 200 },
  { field: "상태", headerName: "상태", width: 100 },
  { field: "등록일시", headerName: "등록일시", width: 150 },
  {
    field: "답변하기",
    headerName: "답변하기",
    width: 100,
    renderCell: (rows) => (
      <button
        onClick={() => {
          alert(`${rows.id}번쨰 답변하기 버튼`);
        }}
      >
        답변하기
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

export default function InquiryPage() {
  // 아트보드 : 7. 고객 문의
  // WBS : 고객 문의
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 });

  return (
    <Template title="고객 문의">
      <>
        <TopContent></TopContent>
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
