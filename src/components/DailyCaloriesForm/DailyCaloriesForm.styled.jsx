import styled from 'styled-components';
import { Form, Field } from 'formik';
export const DailyCaloriesContainer = styled.div`
  height: 100%;
  @media screen and (max-width: 767px) {
    width: 320px;
    margin: 0 auto 30px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 16px 16px;
  }
`;
export const DailyCaloriesFormContainer = styled.div`
  width: 280px;
  margin-top: 32px;
  @media screen and (min-width: 768px) {
    display: block;
    width: 704px;
    margin-top: 100px;
  }
  @media screen and (min-width: 1280px) {
    width: 608px;
    margin-top: 147px;
  }
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const FieldStyled = styled(Field)`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  width: 240px;
  margin-top: 0px;
  font-size: 8px;
  :focus {
    outline: none;
    border-bottom: 1px solid #fc842d;
  }
  @media screen and (min-width: 768px) {
    margin-top: 0px;
    margin-right: 30px;
    margin-bottom: 20px;
    font-size: 14px;
    font-family: 'Verdana';
    font-size: 14px;
    :focus {
      outline: none;
      border-bottom: 1px solid #fc842d;
    }
  }
`;

export const FieldStyledMobil = styled.div`
  display: flex;
  flex-flow: column-reverse;
  border: none;
  margin-top: 32px;
  @media screen and (min-width: 768px) {
    display: none;
    width: 240px;
  }
`;

export const FieldStyledTab = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    display: flex;
    flex-flow: column-reverse;
    margin-top: 30px;
  }
`;

export const FieldRadioGrup = styled(Field)`
  align-items: baseline;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;
  width: 240px;
  margin-top: 30px;
`;

export const RadioStyled = styled.input`
  appearance: none;
  background-color: #fff;
  margin: 0;
  margin-right: 4px;
  font: inherit;
  color: currentColor;
  width: 20px;
  height: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 50%;
  display: grid;
  place-content: center;
  ::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #fc842d;
  }
  :checked::before {
    transform: scale(1);
  }
`;

export const DailyCaloriesFormTitle = styled.h1`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #212121;
  @media screen and (min-width: 768px) {
    margin-bottom: 36px;
    font-size: 34px;
    line-height: 41px;
  }
`;

export const ButtonCont = styled.div`
  width: 100%;
  margin-top: 30px;
  display: grid;
  place-content: center;
`;

export const ErrorMessageContainer = styled.div`
  position: absolute;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
  color: red;
  margin: -17px;
  padding-left: 16px;
  @media screen and (min-width: 768px) {
    margin: 0px;
    padding-left: 0px;
  }
`;

export const Radiolabel = styled.label`
  display: flex;
  align-items: baseline;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;
  margin-top: 8px;
`;

export const RadioGrupLabel = styled.div`
  display: flex;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;
  width: 240px;
  justify-content: space-between;
  margin-top: 8px;
  @media screen and (min-width: 768px) {
    border-top: 1px solid #e0e0e0;
  }
`;
export const Label = styled.label`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;
  margin-bottom: 20px;
  display: block;
  @media screen and (max-width: 767px) {
    margin-bottom: 8px;
  }
`;
export const InputLabel = styled.label`
  font-family: Verdana;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 32px;
`;
