import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_URL } from "./App";

// BEGIN: Style Component
const SidebarWrap = styled.div`
  width: 290px;
  flex: 1 0 auto;
  position: relative;
  height: calc(100vh - 79px);
  padding: 44px 28px 35px 32px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  background-color: #280559;
  transition: width 0.3s ease-in-out;
  &.animation {
    width: 58px;
    transition: width 0.3s ease-in-out;
  }
`;

const MenuToggleWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* opacity: 1;
  transition: opacity 0.5s ease-in-out;
  &.animation {
    opacity: 0;
    transition: opacity 0.1s ease-in-out;
  } */
`;
const ToggleTopWrap = styled.div``;
const ToggleBottomWrap = styled.div``;
const MenuToggleBtn = styled.button`
  width: 27px;
  height: 18px;
`;
const ToggleBtnImg = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
`;

const TopTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #92929d;
  margin-top: 33px;
`;
const MenuItems = styled.div`
  margin-top: 48px;
`;
const MenuItem = styled.div`
  &:not(:first-child) {
    margin-top: 9px;
  }
`;
const ItemIcon = styled.img`
  width: 20px;
`;
const Link = styled(NavLink)`
  padding: 18px 20px;
  display: block;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  &:hover {
    color: #fff;
  }
  &.active {
    border-radius: 15px;
    background-color: #e6eff3;
    color: #280559;
    ${ItemIcon} {
      /* active 상태에서의 이미지 스타일 지정 */
    }
  }
`;
const ItemLeftWrap = styled.div`
  display: flex;
  align-items: center;
`;
const ItemText = styled.p`
  margin-left: 20px;
`;
const ItemAlarm = styled.div`
  width: 40px;
  height: 28px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.1px;
  color: #fff;
  border-radius: 30px;
  text-align: center;
  line-height: 28px;
  background-color: #db0d4b;
`;
const AdminInfoWrap = styled.div``;
const InfoCenterWrap = styled.div``;
const AdminName = styled.p`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.13px;
  line-height: 27px;
  color: #f8f9fb;
`;
const AdminEmail = styled.p`
  margin-top: 2px;
  font-size: 14px;
  letter-spacing: 0.1px;
  line-height: 21px;
  color: #aaabaf;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const LogoutWrap = styled.div`
  /* position: absolute;
  right: 0; */
`;
const LogoutIcon = styled.img`
  display: block;
  margin-left: auto;
  width: 18.5px;
  height: 18.7px;
`;
// END: Style Component

interface IMenuItemFunc {
  to: string;
  iconSrc: string;
  activeIconSrc: string;
  text: string;
  alarmCount: number;
}

// Iterator Component
const MenuItemFunc: React.FC<IMenuItemFunc> = ({ to, iconSrc, activeIconSrc, text, alarmCount }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <MenuItem>
      <Link to={to}>
        <ItemLeftWrap>
          <ItemIcon src={isActive ? activeIconSrc : iconSrc} />
          <ItemText>{text}</ItemText>
        </ItemLeftWrap>
        {alarmCount > 0 && <ItemAlarm>{alarmCount}</ItemAlarm>}
      </Link>
    </MenuItem>
  );
};

export default function Sidebar() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // 사이드바 collapse
  const [evilReportAlarmCount, setEvilReportAlarmCount] = useState(0);
  const [qnaAlarmCount, setQnaAlarmCount] = useState(0);
  // 관리자 정보, cs, 고객문의 미처리건
  useEffect(() => {
    // postSidebarInfos

    const fetchData = async () => {
      try {
        // API 컨트롤러의 특정 함수를 호출합니다.
        const response = await fetch(`${BASE_URL}/api/sidebar-infos`, { method: "POST" });
        if (response.ok) {
          const responseData = await response.json();
          // TODO: 로그인한 관리자 정보 받아오기
          const { evilReportAlarmCount, qnaAlarmCount } = responseData;
          setEvilReportAlarmCount(evilReportAlarmCount);
          setQnaAlarmCount(qnaAlarmCount);
        }
      } catch (error) {
        // 오류 처리를 수행합니다.
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  function toggleSidebar() {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  }

  // 사이드바 메뉴
  const menuItems: IMenuItemFunc[] = [
    {
      to: "/dashboard",
      iconSrc: "/images/sidebar/dashboard.png",
      activeIconSrc: "/images/sidebar/dashboard-active.png",
      text: "대시 보드",
      alarmCount: 0,
    },
    {
      to: "/user-info",
      iconSrc: "/images/sidebar/user-info.png",
      activeIconSrc: "/images/sidebar/user-info-active.png",
      text: "회원 정보",
      alarmCount: 0,
    },
    { to: "/cs", iconSrc: "/images/sidebar/cs.png", activeIconSrc: "/images/sidebar/cs-active.png", text: "CS관리", alarmCount: evilReportAlarmCount },
    { to: "/statics", iconSrc: "/images/sidebar/statics.png", activeIconSrc: "/images/sidebar/statics-active.png", text: "통계 지표", alarmCount: 0 },
    { to: "/payment", iconSrc: "/images/sidebar/payment.png", activeIconSrc: "/images/sidebar/payment-active.png", text: "결제 통계", alarmCount: 0 },
    { to: "/admin", iconSrc: "/images/sidebar/admin.png", activeIconSrc: "/images/sidebar/admin-active.png", text: "관리자 계정", alarmCount: 0 },
    {
      to: "/chatting-session",
      iconSrc: "/images/sidebar/chatting-session.png",
      activeIconSrc: "/images/sidebar/chatting-session-active.png",
      text: "채팅방 세션",
      alarmCount: 0,
    },
    { to: "/inquiry", iconSrc: "/images/sidebar/inquiry.png", activeIconSrc: "/images/sidebar/inquiry-active.png", text: "고객 문의", alarmCount: qnaAlarmCount },
    { to: "/setting", iconSrc: "/images/sidebar/setting.png", activeIconSrc: "/images/sidebar/setting-active.png", text: "설정", alarmCount: 0 },
  ];

  // 알림 카운트
  // useState
  // useEffect(fetch => 폴리글립 백엔드 DB 접근 => )
  return (
    <SidebarWrap className={isSidebarCollapsed ? "animation" : ""}>
      <MenuToggleBtn onClick={toggleSidebar}>
        <ToggleBtnImg src="/images/sidebar/menu_btn.png" />
      </MenuToggleBtn>
      <MenuToggleWrap className={isSidebarCollapsed ? "animation" : ""}>
        <ToggleTopWrap>
          <TopTitle>MENU</TopTitle>
          <MenuItems>
            {menuItems.map((item, index) => (
              <MenuItemFunc key={index} to={item.to} iconSrc={item.iconSrc} activeIconSrc={item.activeIconSrc} text={item.text} alarmCount={item.alarmCount} />
            ))}
          </MenuItems>
        </ToggleTopWrap>
        {/* TODO: 관리자 정보 이름 연결 */}
        <ToggleBottomWrap>
          <AdminInfoWrap>
            <InfoCenterWrap className={isSidebarCollapsed ? "" : "active"}>
              <AdminName>관리자1</AdminName>
              <AdminEmail>thor@naver.com</AdminEmail>
            </InfoCenterWrap>
            {/* TODO: 로그아웃 링크 */}
            <LogoutWrap>
              <Link to="/logout">
                <LogoutIcon src="/images/sidebar/logout.png" alt="로그아웃"></LogoutIcon>
              </Link>
            </LogoutWrap>
          </AdminInfoWrap>
        </ToggleBottomWrap>
      </MenuToggleWrap>
    </SidebarWrap>
  );
}
