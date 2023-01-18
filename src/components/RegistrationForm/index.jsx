import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { register } from 'redux/auth/auth-operations';
import { RegisterSchema } from 'utils/schemas/RegisterSchema';
import { ButtonAuth, ButtonLinkAuth } from 'components/Button';
import { Link } from 'react-router-dom';
import {
  Title,
  FormList,
  FormItem,
  Label,
  Input,
  ButtonsContainer,
  FormReg,
  Wrap,
  MessageErr,
  GoogleButton,
} from './RegistrationForm.styled';
import { ShowPasswordButton } from 'components/Button/ShowPasswordButton';
import { userSelector } from 'redux/auth/auth-selectors';
import { useTranslation } from "react-i18next";

const FormError = ({ name }) => {
    const { t } = useTranslation();
  return (
    <ErrorMessage
      name={name}
      render={message => <MessageErr>{t(message)}</MessageErr>}
    />
  );
};

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegistrationForm = () => {
  const userSavedData = useSelector(userSelector.selectUserSavedData);

  const [showPassword, setShow] = useState(false);
  const handleClick = () => setShow(!showPassword);
  const dispatch = useDispatch();
    const { t } = useTranslation();

  const handleSubmit = async ({ name, email, password }, { resetForm }) => {
    userSavedData
      ? await dispatch(register({ ...userSavedData, name, email, password }))
      : await dispatch(register({ name, email, password }));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={RegisterSchema}
      >
        <Wrap>
          <Title>{t("header.signup2")}</Title>

          <FormReg autoComplete="off">
            <FormList>
              <FormItem>
                <Label htmlFor="name">{t("AuthForm.label_1")}</Label>
                <Input id="name" name="name" type="text" />
                <FormError name="name" component="p" />
              </FormItem>
              <FormItem>
                <Label htmlFor="email">{t("AuthForm.label_3")}</Label>
                <Input id="email" name="email" type="text" />
                <FormError name="email" component="p" />
              </FormItem>

              <FormItem>
                <Label htmlFor="password">{t("AuthForm.label_2")}</Label>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'true' : 'password'}
                />
                <FormError name="password" component="p" />
                <ShowPasswordButton
                  handleClick={handleClick}
                  show={showPassword}
                />
              </FormItem>
            </FormList>
            <ButtonsContainer>
              <ButtonAuth text={t("header.buttonReg")} />
              <Link to="/login">
                <ButtonLinkAuth text={t("header.buttonLogin")} />
              </Link>
             <GoogleButton href={`http://localhost:5001/api/auth/google`}>
               {t("header.google")}
              </GoogleButton>
            </ButtonsContainer>
          </FormReg>
        </Wrap>
      </Formik>
    </>
  );
};
