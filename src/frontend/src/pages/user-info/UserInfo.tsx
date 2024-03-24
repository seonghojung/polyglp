import Template from '../components/Template';
import styled from 'styled-components';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { useState } from 'react';
import { Button } from '@mui/material';
import TableHeader from './TableHeader';

const rows: GridRowsProp = [
  {
    id: 1,
    닉네임: '코드스페이스제이크',
    아이디: '제이크',
    이메일: 'jake@codespace.im',
    '구독 여부': '구독중',
    성별: '남성',
    언어: '히브리어',
    경고누적: '누적없음',
    등록일시: '2024-03-24 16:09:23',
  },
  { id: 2, 닉네임: '닉네임', 아이디: '아이디', 이메일: '이메일', '구독 여부': '구독 여부', 성별: '성별', 언어: '언어' },
  { id: 3, 닉네임: '닉네임', 아이디: '아이디', 이메일: '이메일', '구독 여부': '구독 여부', 성별: '성별', 언어: '언어' },
  { id: 4, 닉네임: '닉네임', 아이디: '아이디', 이메일: '이메일', '구독 여부': '구독 여부', 성별: '성별', 언어: '언어' },
  { id: 5, 닉네임: '닉네임', 아이디: '아이디', 이메일: '이메일', '구독 여부': '구독 여부', 성별: '성별', 언어: '언어' },
  { id: 6, 닉네임: '닉네임', 아이디: '아이디', 이메일: '이메일', '구독 여부': '구독 여부', 성별: '성별', 언어: '언어' },
  { id: 7, 닉네임: '닉네임', 아이디: '아이디', 이메일: '이메일', '구독 여부': '구독 여부', 성별: '성별', 언어: '언어' },
  { id: 8, 닉네임: '닉네임', 아이디: '아이디', 이메일: '이메일', '구독 여부': '구독 여부', 성별: '성별', 언어: '언어' },
  { id: 9, 닉네임: '닉네임', 아이디: '아이디', 이메일: '이메일', '구독 여부': '구독 여부', 성별: '성별', 언어: '언어' },
  {
    id: 10,
    닉네임: '닉네임',
    아이디: '아이디',
    이메일: '이메일',
    '구독 여부': '구독 여부',
    성별: '성별',
    언어: '언어',
  },
  {
    id: 11,
    닉네임: '닉네임',
    아이디: '아이디',
    이메일: '이메일',
    '구독 여부': '구독 여부',
    성별: '성별',
    언어: '언어',
  },
  {
    id: 12,
    닉네임: '닉네임',
    아이디: '아이디',
    이메일: '이메일',
    '구독 여부': '구독 여부',
    성별: '성별',
    언어: '언어',
  },
  {
    id: 13,
    닉네임: '닉네임',
    아이디: '아이디',
    이메일: '이메일',
    '구독 여부': '구독 여부',
    성별: '성별',
    언어: '언어',
  },
];

const columns: GridColDef[] = [
  { field: '닉네임', headerName: '닉네임', width: 179 },
  { field: '아이디', headerName: '아이디', width: 216 },
  { field: '이메일', headerName: '이메일', width: 216 },
  { field: '구독 여부', headerName: '구독 여부', width: 227 },
  { field: '성별', headerName: '성별', width: 178 },
  { field: '언어', headerName: '언어', width: 176 },
  {
    field: '자세히보기',
    headerName: '자세히보기',
    width: 100,
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

const UserInfo = ({}) => {
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 });

  return (
    <Template title="회원 정보">
      <>
        <div>
          <TableHeader setNoticeList={() => {}} />
        </div>
        <div>
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
                '& .MuiDataGrid-cell': {
                  border: 'none',
                },
                '& .MuiDataGrid-cellContent': {
                  color: '#9e9e9e',
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
        </div>
      </>
    </Template>
  );
};

export default UserInfo;
