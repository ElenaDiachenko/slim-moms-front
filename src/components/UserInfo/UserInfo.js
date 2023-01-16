import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { logOut } from 'redux/auth/auth-operations';
// import { authSelectors } from 'redux/auth/auth-selectors';
import sprite from 'images/icons.svg';
import { useAuth } from 'hooks/useAuth';
import {
  UserName,
  ExitBtn,
  UserNameContainer,
  ModalContent,
  ModalBox,
  MenuButton,
  NameBox,
  Bar,
  BackArrow,
  BackLink,
  UserNavLink,
  NavLinkBox,
  UserContainer,
} from './UserInfo.styled';

const UserInfoModal = () => {
  const [menuActive, setMenuActive] = useState(false);


  return (
    <>
      <MenuButton
        className={menuActive ? 'active' : ''}
        type="button"
        onClick={() => setMenuActive(!menuActive)}
      >
        <Bar />
        <Bar />
        <Bar />
      </MenuButton>
      <UserInfoNav active={menuActive} setActive={setMenuActive} />
    </>
  );
};

const UserInfoNav = ({ active, setActive }) => {
    const { t } = useTranslation();
  return (
    <ModalBox className={active ? 'active' : ''}>
      <ModalContent>
        <UserNavLink to={'./diary'} onClick={() => setActive(!active)}>
          {t("MobileMenu.page1")}
        </UserNavLink>
        <UserNavLink to={'./calculator'} onClick={() => setActive(!active)}>
          {t("MobileMenu.page2")}
        </UserNavLink>
      </ModalContent>
    </ModalBox>
  );
};

export const UserInfo = () => {
  const dispatch = useDispatch();
  const location = useLocation();
    const { t } = useTranslation();

  const { user } = useAuth();

  const isLogout = () => {
    dispatch(logOut());
  };

  return (
    <UserContainer>
      <NavLinkBox>
        <UserNavLink to={'./diary'}>{t("MobileMenu.page1")}</UserNavLink>
        <UserNavLink to={'./calculator'}>{t("MobileMenu.page2")}</UserNavLink>
      </NavLinkBox>

      <UserNameContainer>
        <BackLink to={location.state?.from ?? '/diary'}>
          <BackArrow>
            <use href={sprite + '#icon-enter-arrow'}></use>
          </BackArrow>
        </BackLink>

        <NameBox>
          <UserName>{user.name}</UserName>
          <ExitBtn type="button" onClick={isLogout}>
            {t("header.exit")}
          </ExitBtn>
        </NameBox>
      </UserNameContainer>

      <UserInfoModal className="modal" />
    </UserContainer>
  );
};
// UserInfoModal - кнопка+модалка и ссылки
// NameBox - name +Exit
// NavLinkBox - отдельно линки, которые вылазят на десктопе
// UserNameContainer - NameBox+BackLink - на мобилке серый фон, на таблетке с бургер-кнопкой -  флекс
