import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// BEGIN: Style Component
const SidebarWrap = styled.div``;

const MenuToggleWrap = styled.div``;
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

const MenuItems = styled.div``;
const MenuItem = styled.div``;
const Link = styled(NavLink)`
  padding: 18px 20px;
  display: block;
`;
const ItemLeftWrap = styled.div``;
const ItemIcon = styled.img``;
const ItemText = styled.p``;
const ItemAlarm = styled.div``;
const AdminInfoWrap = styled.div``;
const InfoCenterWrap = styled.div``;
const AdminName = styled.p``;
const AdminEmail = styled.p``;
const LogoutWrap = styled.div``;
const LogoutIcon = styled.img``;

// END: Style Component

export default function Sidebar() {
  return (
    <SidebarWrap>
      <MenuToggleBtn>
        <ToggleBtnImg src="/public/menu_btn.png" />
      </MenuToggleBtn>
      <MenuToggleWrap>
        <TopTitle>MENU</TopTitle>
        <MenuItems>
          <MenuItem>
            <Link to="/dashboard">
              <ItemLeftWrap>
                <ItemIcon></ItemIcon>
                <ItemText>대시 보드</ItemText>
              </ItemLeftWrap>
              <ItemAlarm></ItemAlarm>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="user-info">
              <ItemLeftWrap>
                <ItemIcon></ItemIcon>
                <ItemText>회원 정보</ItemText>
              </ItemLeftWrap>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/cs">
              <ItemLeftWrap>
                <ItemIcon></ItemIcon>
                <ItemText>CS 관리</ItemText>
              </ItemLeftWrap>
              <ItemAlarm></ItemAlarm>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/statics">
              <ItemLeftWrap>
                <ItemIcon></ItemIcon>
                <ItemText>통계 지표</ItemText>
              </ItemLeftWrap>
              <ItemAlarm></ItemAlarm>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/payments">
              <ItemLeftWrap>
                <ItemIcon></ItemIcon>
                <ItemText>결제 통계</ItemText>
              </ItemLeftWrap>
              <ItemAlarm></ItemAlarm>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/admin">
              <ItemLeftWrap>
                <ItemIcon></ItemIcon>
                <ItemText>관리자 계정</ItemText>
              </ItemLeftWrap>
              <ItemAlarm></ItemAlarm>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/chatting-session">
              <ItemIcon></ItemIcon>
              <ItemText>채팅방 세션</ItemText>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/inquiry">
              <ItemIcon></ItemIcon>
              <ItemText>고객 문의</ItemText>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/setting">
              <ItemIcon></ItemIcon>
              <ItemText>설정</ItemText>
            </Link>
          </MenuItem>
        </MenuItems>
        {/* TODO: 관리자 정보 이름 연결 */}
        <AdminInfoWrap>
          <InfoCenterWrap>
            <AdminName>관리자1</AdminName>
            <AdminEmail>thor@naver.com</AdminEmail>
          </InfoCenterWrap>
          {/* TODO: 로그아웃 링크 */}
          <LogoutWrap>
            <Link to="/logout">
              <LogoutIcon src="/public/images/user.png" alt="로그아웃"></LogoutIcon>
            </Link>
          </LogoutWrap>
        </AdminInfoWrap>
      </MenuToggleWrap>
    </SidebarWrap>
  );
}
