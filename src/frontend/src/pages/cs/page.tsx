import styled from "styled-components";
import Templete from "../components/Templete";
import Divider from "@mui/material/Divider";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { useState } from "react";
import TableHeader from "./components/TableHeader";

const rows: GridRowsProp = [
  { id: 1, col1: "Hello", col2: "World", col3: "asdasd@naver.com" },
  { id: 2, col1: "DataGridPro", col2: "is Awesome", col3: "asdasd@naver.com" },
  { id: 3, col1: "MUI", col2: "is Amazing", col3: "asdasd@naver.com" },
];

const columns: GridColDef[] = [
  { field: "col1", headerName: "Column 1", width: 150 },
  { field: "col2", headerName: "Column 2", width: 150 },
  { field: "col3", headerName: "Column 3", width: 150 },
];

export const Container = styled.div`
  padding: 54px 59px 59px 60px;
`;

export const Header = styled.div`
  padding-bottom: 15px;
`;

const Wrap = styled.div`
  /* width: 89.108%; */

  margin-top: 102px;
  /* height: calc(100vh - 273px); */
  background-color: #fff;
`;

const Inner = styled.div`
  padding: 0 47px;
`;

const TopContent = styled.div`
  /* height: 232px; */
`;

const BodyContent = styled.div`
  /* width: 93.508287%; */
`;

const Table = styled.table`
  min-width: 1448px;
  table-layout: fixed;
`;

const Thead = styled.thead`
  /* padding: 11px 43px 11px 32px; */
  display: block;
`;

const BorderWrap = styled.div`
  padding: 11px 0;
  border-bottom: 2px solid #280559;
`;

const TitleWrap = styled.div`
  display: flex;
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #333;
  text-align: center;
`;

const Title1 = styled(Title)`
  width: 100px;
`;
const Title2 = styled(Title)`
  width: 125px;
`;
const Title3 = styled(Title)`
  width: 200px;
`;
const Title4 = styled(Title)`
  width: 200px;
`;
const Title5 = styled(Title)`
  width: 250px;
`;
const Title6 = styled(Title)`
  width: 125px;
`;
const Title7 = styled(Title)`
  width: 125px;
`;
const Title8 = styled(Title)`
  width: 150px;
`;
const Title9 = styled(Title)`
  width: 100px;
`;

const Tdata = styled.div`
  padding: 11px 43px 11px 32px;
  height: 606px;
  overflow: auto;
`;

const Test = styled.div`
  height: 250px;
`;

const Pagination = styled.div`
  text-align: center;
`;

export default function CsPage() {
  // 아트보드 : 2. CS 관리
  // WBS : CS 관리
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 });
  return (
    <Templete title="CS관리">
      <Wrap>
        <Inner>
          <TopContent>
            <TableHeader setNoticeList={() => {}} />
          </TopContent>
          <BodyContent>
            <div style={{ height: 300, width: "100%" }}>
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
        </Inner>
      </Wrap>
    </Templete>
  );
}
