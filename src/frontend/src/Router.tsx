import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import MainPage from "./pages/home/page";
import LoginPage from "./pages/login/page";
import DashBoardPage from "./pages/dashboard/page";
import UserInfoPage from "./pages/user-info/page";
import UserInfoDetailPage from "./pages/user-info/user-info-detail/page";
import CsPage from "./pages/cs/page";
import CsDetailPage from "./pages/cs/cs-detail/page";
import AdminPage from "./pages/admin/page";
import AdminCreatePage from "./pages/admin/create/page";
import PaymentPage from "./pages/payment/page";
import StaticsPage from "./pages/statics/page";
import SettingPage from "./pages/setting/page";
import InquiryPage from "./pages/inquiry/page";
import InquiryDetailPage from "./pages/inquiry/inquiry-detail/page";
import ChattingSessionPage from "./pages/chatting-session/page";

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
      // 대시 보드
      {
        path: "dashboard",
        children: [
          {
            index: true,
            element: <DashBoardPage />,
          },
        ],
      },
      // 회원 정보
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
      // cs 관리
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
      // 통계 지표
      {
        path: "statics",
        element: <StaticsPage />,
      },
      // 결제 통계
      {
        path: "payment",
        element: <PaymentPage />,
      },
      // 관리자 계정
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

      // 채팅방 세션
      {
        path: "chatting-session",
        element: <ChattingSessionPage />,
      },
      // 고객 문의
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
      // 설정
      {
        path: "setting",
        element: <SettingPage />,
      },
    ],
  },
]);
