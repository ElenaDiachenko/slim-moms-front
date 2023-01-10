import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { register } from 'redux/auth/auth-operations';
import * as yup from 'yup';
import { ButtonAuth, ButtonLinkAuth } from 'components/Button';
import { Link, useNavigate } from 'react-router-dom';
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

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <MessageErr>{message}</MessageErr>}
    />
  );
};

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name must be at least 3 characters')
    .max(15, 'Name must be at most 8 characters')
    .required('Name is a required field'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is a required field'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(100, 'Password must be at most 100 characters')
    .required('Password is a required field'),
});

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
  const navigate = useNavigate();

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(register({ name, email, password }));
    userSavedData ? navigate('/diary') : navigate('/calculator');
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Wrap>
          <Title>Register</Title>

          <FormReg autoComplete="off">
            <FormList>
              <FormItem>
                <Label htmlFor="name">Name *</Label>
                <Input id="name" name="name" type="text" />
                <FormError name="name" component="p" />
              </FormItem>
              <FormItem>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="text" />
                <FormError name="email" component="p" />
              </FormItem>

              <FormItem>
                <Label htmlFor="password">Password *</Label>
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
              <ButtonAuth text="Register" />
              <Link to="/login">
                <ButtonLinkAuth text="Log in" />
              </Link>
              <GoogleButton href={`http://localhost:5001/api/auth/google`}>
                Google auth
              </GoogleButton>
            </ButtonsContainer>
          </FormReg>
        </Wrap>
      </Formik>
    </>
  );
};
