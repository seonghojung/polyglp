import styled from "styled-components";
import Template from "../components/Template";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { useState } from "react";

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
      </>
    </Template>
  );
}
