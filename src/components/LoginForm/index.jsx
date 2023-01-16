import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FormLogIn, Input, Label, ErrorText ,GoogleButton} from './LoginForm.styled';
import { logIn } from 'redux/auth/auth-operations';
import { ButtonAuth, ButtonLinkAuth } from 'components/Button';
import { Link } from 'react-router-dom';
import { Box } from 'components/Box';
import 'react-toastify/dist/ReactToastify.css';
import { ShowPasswordButton } from 'components/Button/ShowPasswordButton';
import { useTranslation } from "react-i18next";

const FormError = ({ name }) => {
    const { t } = useTranslation();

  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{t(message)}</ErrorText>}
    />
  );
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email('validationRegisterForm.label2')
    .required('validationDiaryForm.label4'),
  password: yup
    .string()
    .min(3, 'validationDiaryForm.label3')
    .required('validationDiaryForm.label4'),
});

const initialValues = {
  email: '',
  password: '',
};

export const FormLogin = () => {
  const [showPassword, setShow] = useState(false);
  const handleClick = () => setShow(!showPassword);
  const dispatch = useDispatch();
    const { t } = useTranslation();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(logIn({ email, password }));

    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormLogIn autoComplete="off">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="55px"
            gridGap="40px"
          >
            <Label htmlFor="email">
               {t("AuthForm.label_3")}<Input type="email" name="email"></Input>
              <FormError name="email" component="p" />
            </Label>
            <Label htmlFor="password">
              {t("AuthForm.label_2")}
              <Input
                name="password"
                type={showPassword ? 'true' : 'password'}
              ></Input>
              <FormError name="password" component="p" />
              <ShowPasswordButton
                handleClick={handleClick}
                show={showPassword}
              />
            </Label>
          </Box>
          <Box
            display="flex"
            flexDirection={['column', 'row']}
            alignItems="center"
            gridGap={['20px', '32px']}
          >
            <ButtonAuth text={t("header.buttonLogin")}></ButtonAuth>
            <Link to="/registration">
              <ButtonLinkAuth text={t("header.buttonReg")}></ButtonLinkAuth>
            </Link>
             <GoogleButton href={`http://localhost:5001/api/auth/google`}>
                {t("header.google")}
              </GoogleButton>
          </Box>
        </FormLogIn>
      </Formik>
    </>
  );
};
