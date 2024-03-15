import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import MainPage from "./pages/home/page";
import LoginPage from "./pages/login/page";
import DashBoardPage from "./pages/dashboard/page";
import UserInfoPage from "./pages/dashboard/user-info/page";
import UserInfoDetailPage from "./pages/dashboard/user-info/user-info-detail/page";
import CsPage from "./pages/dashboard/cs/page";
import CsDetailPage from "./pages/dashboard/cs/cs-detail/page";
import AdminPage from "./pages/dashboard/admin/page";
import AdminCreatePage from "./pages/dashboard/admin/create/page";
import PaymentsPage from "./pages/dashboard/payments/page";
import StaticsPage from "./pages/dashboard/statics/page";
import SettingPage from "./pages/dashboard/setting/page";
import InquiryPage from "./pages/dashboard/inquiry/page";
import InquiryDetailPage from "./pages/dashboard/inquiry/inquiry-detail/page";

const checkLogin = async () => {
  //@TODO: 로그인했는지 체크하는 함수

  return null;
};

export const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: <Layout />,
    loader: checkLogin,
    children: [
      { index: true, element: <MainPage /> },
      {
        path: "login",
        children: [
          {
            index: true,
            element: <LoginPage />,
          },
        ],
      },
      {
        path: "dashboard",
        children: [
          {
            index: true,
            element: <DashBoardPage />,
          },
          {
            path: "user-info",
            children: [
              {
                index: true,
                element: <UserInfoPage />,
              },
              {
                path: ":userID",
                element: <UserInfoDetailPage />,
              },
            ],
          },
          {
            path: "cs",
            children: [
              {
                index: true,
                element: <CsPage />,
              },
              {
                path: ":csID",
                element: <CsDetailPage />,
              },
            ],
          },
          {
            path: "admin",
            children: [
              {
                index: true,
                element: <AdminPage />,
              },
              {
                path: "create",
                element: <AdminCreatePage />,
              },
            ],
          },
          {
            path: "payments",
            element: <PaymentsPage />,
          },
          {
            path: "statics",
            element: <StaticsPage />,
          },
          { path: "setting", element: <SettingPage /> },
          {
            path: "inquiry",
            children: [
              {
                index: true,
                element: <InquiryPage />,
              },
              {
                path: ":inquiryID",
                element: <InquiryDetailPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
