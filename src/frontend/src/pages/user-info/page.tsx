import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { Suspense, useState } from "react";
import Template from "../components/Template";
import { Await, useLoaderData } from "react-router-dom";
import { IUser } from "./user-info-detail/page";
import UserInfo from "./UserInfo";

export default function UserInfoPage() {
  // 아트보드 : 1 회원 정보
  // WBS : 회원정보

  return <UserInfo />;
}
