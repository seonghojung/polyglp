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

export default function UserInfoPage() {
  // 아트보드 : 1 회원 정보
  // WBS : 회원정보
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 });

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        disableRowSelectionOnClick
        pageSizeOptions={[10, 25, 50]}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
      />
    </div>
  );
}
