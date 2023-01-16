import { Button } from 'components/Button';
import { Formik } from 'formik';
import { useTranslation } from "react-i18next";

import {
  DailyCaloriesContainer,
  DailyCaloriesFormContainer,
  DailyCaloriesFormTitle,
  FieldStyled,
  Label,
  InputLabel,
  InputContainer,
  FieldStyledTab,
  FieldStyledMobil,
  FieldRadioGrup,
  RadioGrupLabel,
  RadioStyled,
  Radiolabel,
  FormStyled,
  ButtonCont,
  ErrorMessageContainer,
} from './DailyCaloriesForm.styled';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'components/Modal';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import {useCalculatorSchema} from '../../utils/schemas/CalculatorSchema';
import { userSelector } from 'redux/auth/auth-selectors';
import { setUserData } from 'redux/auth/auth-slice';
import { getDiet } from 'redux/products/products-operations';
import { updateUser } from 'redux/auth/auth-operations';
import { useModal } from 'hooks/useModal';
import DailyCalorieIntake from '../DailyCalorieIntake';
import Loader from 'components/Loader/Loader';

export const DailyCaloriesForm = () => {
  const { isModalOpen, closeModal, openModal } = useModal();
  const [apiSuccess, setApiSuccess] = useState(false);
  const user = useSelector(userSelector.selectUser);
  const [isLoading, setIsLoading] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const initialValues = isLoggedIn
    ? {
        height: user.height ?? '',
        age: user.age ?? '',
        curWeight: user.curWeight ?? '',
        desWeight: user.desWeight ?? '',
        bloodType: user.bloodType ?? '1',
      }
    : {
        height: '',
        age: '',
        curWeight: '',
        desWeight: '',
        bloodType: '1',
      };
  const { t } = useTranslation();
const calculatorSchema = useCalculatorSchema()
  const dispatch = useDispatch();

  const mds = window.matchMedia('(min-width: 768px)');

  const handleOpenModal = () => openModal();

  const handleSubmit = async data => {
    setIsLoading(true);
    if (!isLoggedIn) {
      await dispatch(getDiet(data));
      await dispatch(setUserData(data));
      setIsLoading(false);
      if (mds.matches) {
        handleOpenModal();
      } else {
        setApiSuccess(true);
      }
    }
    if (isLoggedIn) {
      await dispatch(updateUser(data));
      setIsLoading(false);
      if (mds.matches) {
        handleOpenModal();
      } else {
        setApiSuccess(true);
      }
    }
  };

  if (apiSuccess) return <Navigate to="/modal" />;

  return (
    <>
      {isLoading ? <Loader /> : null}
      <DailyCaloriesContainer>
        <DailyCaloriesFormContainer>
          <DailyCaloriesFormTitle>
            {t("dailyCalorieForm.title")}
          </DailyCaloriesFormTitle>
          <Formik
            initialValues={initialValues}
            validationSchema={calculatorSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <FormStyled>
                <InputContainer>
                  <FieldStyled name="height" type="number" autoComplete="off" />
                  <InputLabel htmlFor="height">{t("dailyCalorieForm.label_1")}</InputLabel>
                  {errors.height && touched.height ? (
                    <ErrorMessageContainer>
                      {errors.height}
                    </ErrorMessageContainer>
                  ) : null}
                </InputContainer>
                <FieldStyledTab>
                  <FieldStyled
                    name="desWeight"
                    type="number"
                    autoComplete="off"
                  />
                  <InputLabel>{t("dailyCalorieForm.label_4")}</InputLabel>
                  {errors.desWeight && touched.desWeight ? (
                    <ErrorMessageContainer>
                      {errors.desWeight}
                    </ErrorMessageContainer>
                  ) : null}
                </FieldStyledTab>
                <InputContainer>
                  <FieldStyled name="age" type="number" autoComplete="off" />
                  <InputLabel>{t("dailyCalorieForm.label_2")}</InputLabel>
                  {errors.age && touched.age ? (
                    <ErrorMessageContainer>{errors.age}</ErrorMessageContainer>
                  ) : null}
                </InputContainer>
                <FieldStyledMobil>
                  <FieldStyled
                    name="curWeight"
                    type="number"
                    autoComplete="off"
                  />
                  <InputLabel>{t("dailyCalorieForm.label_3")}</InputLabel>

                  {errors.curWeight && touched.curWeight ? (
                    <ErrorMessageContainer>
                      {errors.curWeight}
                    </ErrorMessageContainer>
                  ) : null}
                </FieldStyledMobil>
                <FieldStyledMobil>
                  <FieldStyled
                    name="desWeight"
                    type="number"
                    autoComplete="off"
                  />
                  <InputLabel>{t("dailyCalorieForm.label_4")}</InputLabel>

                  {errors.desWeight && touched.desWeight ? (
                    <ErrorMessageContainer>
                      {errors.desWeight}
                    </ErrorMessageContainer>
                  ) : null}
                </FieldStyledMobil>
                <FieldRadioGrup
                  component="div"
                  name="bloodType"
                  label="bloodType"
                >
                  <Label>{t("dailyCalorieForm.label_5")}</Label>
                  <RadioGrupLabel>
                    <Radiolabel htmlFor="bloodType">
                      <RadioStyled
                        type="radio"
                        name="bloodType"
                        id="1"
                        value="1"
                        defaultChecked={initialValues.bloodType === '1' ?? '1'}
                      />
                      1
                    </Radiolabel>
                    <Radiolabel htmlFor="bloodType">
                      <RadioStyled
                        type="radio"
                        name="bloodType"
                        id="2"
                        value="2"
                        defaultChecked={initialValues.bloodType === '2' ?? '1'}
                      />
                      2
                    </Radiolabel>
                    <Radiolabel htmlFor="bloodType">
                      <RadioStyled
                        type="radio"
                        name="bloodType"
                        id="3"
                        value="3"
                        defaultChecked={initialValues.bloodType === '3' ?? '1'}
                      />
                      3
                    </Radiolabel>
                    <Radiolabel htmlFor="bloodType">
                      <RadioStyled
                        type="radio"
                        name="bloodType"
                        id="4"
                        value="4"
                        defaultChecked={initialValues.bloodType === '4' ?? '1'}
                      />
                      4
                    </Radiolabel>
                  </RadioGrupLabel>
                </FieldRadioGrup>
                <FieldStyledTab>
                  <FieldStyled
                    name="curWeight"
                    type="number"
                    autoComplete="off"
                  />
                  <InputLabel>{t("dailyCalorieForm.label_3")}</InputLabel>

                  {errors.curWeight && touched.curWeight ? (
                    <ErrorMessageContainer>
                      {errors.curWeight}
                    </ErrorMessageContainer>
                  ) : null}
                </FieldStyledTab>

                <ButtonCont>
                  <Button type="submit" text={t("dailyCalorieForm.btn_name")} />
                </ButtonCont>
              </FormStyled>
            )}
          </Formik>
        </DailyCaloriesFormContainer>
        {isModalOpen && (
          <Modal onClose={closeModal}>
            <DailyCalorieIntake onClose={closeModal} />
          </Modal>
        )}
      </DailyCaloriesContainer>
    </>
  );
};
