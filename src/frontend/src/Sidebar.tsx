import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";

// BEGIN: Style Component
const SidebarWrap = styled.div`
  width: 350px;
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
const AdminInfoWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
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
`;
const LogoutWrap = styled.div`
  position: absolute;
  right: 0;
`;
const LogoutIcon = styled.img`
  width: 18.5px;
  height: 18.7px;
`;
// END: Style Component

interface IMenuItemFunc {
  to: string;
  iconSrc: string;
  text: string;
  hasAlarm: boolean;
}

// Iterator Component
const MenuItemFunc: React.FC<IMenuItemFunc> = ({ to, iconSrc, text, hasAlarm }) => {
  return (
    <MenuItem>
      <Link to={to}>
        <ItemLeftWrap>
          <ItemIcon src={iconSrc} />
          <ItemText>{text}</ItemText>
        </ItemLeftWrap>
        {hasAlarm && <ItemAlarm>0</ItemAlarm>} {/* 조건부 렌더링 */}
      </Link>
    </MenuItem>
  );
};

export default function Sidebar() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  function toggleSidebar() {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  }

  return (
    <SidebarWrap className={isSidebarCollapsed ? "animation" : ""}>
      <MenuToggleBtn onClick={toggleSidebar}>
        <ToggleBtnImg src="/images/sidebar/menu_btn.png" />
      </MenuToggleBtn>
      <MenuToggleWrap className={isSidebarCollapsed ? "animation" : ""}>
        <ToggleTopWrap>
          <TopTitle>MENU</TopTitle>
          <MenuItems>
            <MenuItemFunc to="/dashboard" iconSrc="/images/sidebar/dashboard.png" text="대시 보드" hasAlarm={false} />
            <MenuItemFunc to="/user-info" iconSrc="/images/sidebar/user-info.png" text="회원 정보" hasAlarm={false} />
            <MenuItemFunc to="/cs" iconSrc="/images/sidebar/cs.png" text="CS관리" hasAlarm={true} />
            <MenuItemFunc to="/statics" iconSrc="/images/sidebar/statics.png" text="통계 지표" hasAlarm={false} />
            <MenuItemFunc to="/payment" iconSrc="/images/sidebar/payment.png" text="결제 통계" hasAlarm={false} />
            <MenuItemFunc to="/admin" iconSrc="/images/sidebar/admin.png" text="관리자 계정" hasAlarm={false} />
            <MenuItemFunc to="/chatting-session" iconSrc="/images/sidebar/chatting-session.png" text="채팅방 세션" hasAlarm={false} />
            <MenuItemFunc to="/inquiry" iconSrc="/images/sidebar/inquiry.png" text="고객 문의" hasAlarm={true} />
            <MenuItemFunc to="/setting" iconSrc="/images/sidebar/setting.png" text="설정" hasAlarm={false} />
          </MenuItems>
        </ToggleTopWrap>
        {/* TODO: 관리자 정보 이름 연결 */}
        <ToggleBottomWrap>
          <AdminInfoWrap>
            <InfoCenterWrap>
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
