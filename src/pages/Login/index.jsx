import { AuthBackground } from 'components/AuthBackground';
import Loader from 'components/Loader/Loader';
import { FormLogin } from 'components/LoginForm';
import { useAuth } from 'hooks/useAuth';
import { LoginPage, TitleLogIn } from './loginPage.styled';
import { useTranslation } from "react-i18next";

const Login = () => {
  const { isLoading } = useAuth();
      const { t } = useTranslation();

  return (
    <>
    <AuthBackground/>
    <LoginPage>
      <TitleLogIn>{t("header.signin")}</TitleLogIn>
      <FormLogin />
      {isLoading && <Loader />}
      </LoginPage>
      {/* // </AuthBackground> */}
      </>
  );
};

export default Login;
