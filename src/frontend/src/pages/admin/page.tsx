import Template from '../components/Template';
import styled from 'styled-components';
import Divider from '@mui/material/Divider';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { useState } from 'react';
import TableHeader from './TableHeader';
import { Button } from '@mui/material';

const rows: GridRowsProp = [
  { id: 1, 아이디: '아이디', 이메일: '이메일', 이름: '이름', 전화번호: '전화번호', 권한내역: '권한내역' },
  { id: 2, 아이디: '아이디', 이메일: '이메일', 이름: '이름', 전화번호: '전화번호', 권한내역: '권한내역' },
  { id: 3, 아이디: '아이디', 이메일: '이메일', 이름: '이름', 전화번호: '전화번호', 권한내역: '권한내역' },
  { id: 4, 아이디: '아이디', 이메일: '이메일', 이름: '이름', 전화번호: '전화번호', 권한내역: '권한내역' },
  { id: 5, 아이디: '아이디', 이메일: '이메일', 이름: '이름', 전화번호: '전화번호', 권한내역: '권한내역' },
  { id: 6, 아이디: '아이디', 이메일: '이메일', 이름: '이름', 전화번호: '전화번호', 권한내역: '권한내역' },
  { id: 7, 아이디: '아이디', 이메일: '이메일', 이름: '이름', 전화번호: '전화번호', 권한내역: '권한내역' },
  { id: 8, 아이디: '아이디', 이메일: '이메일', 이름: '이름', 전화번호: '전화번호', 권한내역: '권한내역' },
  { id: 9, 아이디: '아이디', 이메일: '이메일', 이름: '이름', 전화번호: '전화번호', 권한내역: '권한내역' },
  { id: 10, 아이디: '아이디', 이메일: '이메일', 이름: '이름', 전화번호: '전화번호', 권한내역: '권한내역' },
  { id: 11, 아이디: '아이디', 이메일: '이메일', 이름: '이름', 전화번호: '전화번호', 권한내역: '권한내역' },
  { id: 12, 아이디: '아이디', 이메일: '이메일', 이름: '이름', 전화번호: '전화번호', 권한내역: '권한내역' },
  { id: 13, 아이디: '아이디', 이메일: '이메일', 이름: '이름', 전화번호: '전화번호', 권한내역: '권한내역' },
];

const columns: GridColDef[] = [
  { field: '아이디', headerName: '아이디', width: 216 },
  { field: '이메일', headerName: '이메일', width: 176 },
  { field: '이름', headerName: '이름', width: 230 },
  { field: '전화번호', headerName: '전화번호', width: 230 },
  { field: '권한내역', headerName: '권한내역', width: 351 },
  {
    field: '자세히보기',
    headerName: '자세히보기',
    width: 150,
    renderCell: (rows) => (
      <Button
        sx={{
          backgroundColor: '#00b9fd',
          ':hover': { backgroundColor: '#00a0db' },
        }}
        type="button"
        variant="contained"
        size="small"
        onClick={() => {
          alert(`${rows.id}번쨰 자세히보기 버튼`);
        }}
      >
        자세히보기
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

export default function AdminPage() {
  // 아트보드 : 5. 관리자 계정
  // WBS : 관리자 계정

  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 });

  return (
    <Template title="관리자 계정">
      <>
        <TableHeader setNoticeList={() => {}} />

        <div style={{ width: '100%' }}>
          <DataGrid
            sx={{
              '& .MuiDataGrid-cell:focus-within, &.MuiDataGrid-cell:focus': {
                outline: 'none',
              },
              '& .MuiDataGrid-columnHeader:focus-within, &.MuiDataGrid-columnHeader:focus': {
                outline: 'none',
              },
              '&.MuiDataGrid-root': {
                border: 'none',
              },
              '& .MuiDataGrid-sortIcon': {
                display: 'none',
              },
              '& .MuiDataGrid-menuIconButton': {
                display: 'none',
              },
              '& .MuiDataGrid-row.Mui-hovered': {
                backgroundColor: 'transparent',
              },
              '& .MuiDataGrid-row:hover': {
                backgroundColor: 'transparent',
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
      </>
    </Template>
  );
}
