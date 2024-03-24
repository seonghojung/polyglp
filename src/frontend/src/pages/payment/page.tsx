import styled from 'styled-components';
import Template from '../components/Template';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { useState } from 'react';
import TableHeader from './TableHeader';
import { Link } from 'react-router-dom';

const MoreLink = styled(Link)`
  width: 73px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  background-color: #00b9fd;
  &:hover {
    background-color: #00a0db;
    color: #fff;
  }
`;

const rows: GridRowsProp = [
  {
    id: 1,
    닉네임: '닉네임',
    아이디: '아이디',
    '구독 상태': '구독 상태',
    '구독 기간': '구독 기간',
    '구독 종류': '구독 종류',
    '결제 방식': '결제 방식',
  },
  {
    id: 2,
    닉네임: '닉네임',
    아이디: '아이디',
    '구독 상태': '구독 상태',
    '구독 기간': '구독 기간',
    '구독 종류': '구독 종류',
    '결제 방식': '결제 방식',
  },
  {
    id: 3,
    닉네임: '닉네임',
    아이디: '아이디',
    '구독 상태': '구독 상태',
    '구독 기간': '구독 기간',
    '구독 종류': '구독 종류',
    '결제 방식': '결제 방식',
  },
  {
    id: 4,
    닉네임: '닉네임',
    아이디: '아이디',
    '구독 상태': '구독 상태',
    '구독 기간': '구독 기간',
    '구독 종류': '구독 종류',
    '결제 방식': '결제 방식',
  },
  {
    id: 5,
    닉네임: '닉네임',
    아이디: '아이디',
    '구독 상태': '구독 상태',
    '구독 기간': '구독 기간',
    '구독 종류': '구독 종류',
    '결제 방식': '결제 방식',
  },
  {
    id: 6,
    닉네임: '닉네임',
    아이디: '아이디',
    '구독 상태': '구독 상태',
    '구독 기간': '구독 기간',
    '구독 종류': '구독 종류',
    '결제 방식': '결제 방식',
  },
  {
    id: 7,
    닉네임: '닉네임',
    아이디: '아이디',
    '구독 상태': '구독 상태',
    '구독 기간': '구독 기간',
    '구독 종류': '구독 종류',
    '결제 방식': '결제 방식',
  },
  {
    id: 8,
    닉네임: '닉네임',
    아이디: '아이디',
    '구독 상태': '구독 상태',
    '구독 기간': '구독 기간',
    '구독 종류': '구독 종류',
    '결제 방식': '결제 방식',
  },
  {
    id: 9,
    닉네임: '닉네임',
    아이디: '아이디',
    '구독 상태': '구독 상태',
    '구독 기간': '구독 기간',
    '구독 종류': '구독 종류',
    '결제 방식': '결제 방식',
  },
  {
    id: 10,
    닉네임: '닉네임',
    아이디: '아이디',
    '구독 상태': '구독 상태',
    '구독 기간': '구독 기간',
    '구독 종류': '구독 종류',
    '결제 방식': '결제 방식',
  },
  {
    id: 11,
    닉네임: '닉네임',
    아이디: '아이디',
    '구독 상태': '구독 상태',
    '구독 기간': '구독 기간',
    '구독 종류': '구독 종류',
    '결제 방식': '결제 방식',
  },
  {
    id: 12,
    닉네임: '닉네임',
    아이디: '아이디',
    '구독 상태': '구독 상태',
    '구독 기간': '구독 기간',
    '구독 종류': '구독 종류',
    '결제 방식': '결제 방식',
  },
  {
    id: 13,
    닉네임: '닉네임',
    아이디: '아이디',
    '구독 상태': '구독 상태',
    '구독 기간': '구독 기간',
    '구독 종류': '구독 종류',
    '결제 방식': '결제 방식',
  },
];

const columns: GridColDef[] = [
  { field: '닉네임', headerName: '닉네임', width: 148 },
  { field: '아이디', headerName: '아이디', width: 157 },
  { field: '구독 상태', headerName: '구독 상태', width: 173 },
  { field: '구독 기간', headerName: '구독 기간', width: 241 },
  {
    field: '구독 상태 조정',
    headerName: '구독 상태 조정',
    width: 190,
    renderCell: (rows) => (
      <button
        onClick={() => {
          alert(`${rows.id}번쨰 구독 상태 조정 버튼`);
        }}
      >
        ▼구독 중
      </button>
    ),
  },
  { field: '구독 종류', headerName: '구독 종류', width: 146 },
  { field: '결제 방식', headerName: '결제 방식', width: 165 },
  {
    field: '회원 상세',
    headerName: '회원 상세',
    width: 100,
    renderCell: (rows) => (
      //TODO. 회원 상세 페이지로 이동
      <MoreLink to={'/user-info/111'}>확인하기</MoreLink>
    ),
  },
];

const TopContent = styled.div`
  /* height: 232px; */
`;

const BodyContent = styled.div`
  /* width: 93.508287%; */
`;

export default function PaymentsPage() {
  // 아트보드 : 4. 결제 통계
  // WBS : 결제 통계
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 });
  return (
    <Template title="결제 통계">
      <>
        <TopContent>
          <TableHeader setNoticeList={() => {}} />
        </TopContent>
        <BodyContent>
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
        </BodyContent>
      </>
    </Template>
  );
}
