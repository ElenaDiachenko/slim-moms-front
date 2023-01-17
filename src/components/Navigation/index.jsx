import { useTranslation } from "react-i18next";
import { NavStyled, Link } from './Navigation.styled';


export const Navigation = () => {
  const {  t } = useTranslation();

  return (
    <NavStyled>
      <Link to="/login">{t("header.signin")}</Link>
      <Link to="/registration">{t("header.signup")}</Link>
    </NavStyled>
  );
};
