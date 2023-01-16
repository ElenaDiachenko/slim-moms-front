import * as Yup from 'yup';
import { useTranslation } from "react-i18next";

export const useCalculatorSchema = ()=>{
  const { t } = useTranslation();
  
const calculatorSchema = Yup.object().shape({
  height: Yup.number()
    .min(100, `${t('validationDiaryForm.label1')}`)
    .typeError(`${t('validationDiaryForm.label3')}`)
    .positive()
    .integer(`${t('validationDiaryForm.label3')}`)
    .max(250, `${t('validationDiaryForm.label2')}`)
     .required(`${t('validationDiaryForm.label4')}`),
  age: Yup.number()
    .min(18, `${t('validationDiaryForm.label5')}`)
    .typeError(`${t('validationDiaryForm.label7')}`)
    .positive()
    .integer()
    .max(100, `${t('validationDiaryForm.label6')}`)
    .required(`${t('validationDiaryForm.label4')}`),
  curWeight: Yup.number()
    .min(20, `${t('validationDiaryForm.label8')}`)
    .typeError(`${t('validationDiaryForm.label14')}`)
    .positive()
    .integer()
    .max(500, `${t('validationDiaryForm.label9')}`)
    .required(`${t('validationDiaryForm.label4')}`),
  desWeight: Yup.number()
    .min(20, `${t('validationDiaryForm.label10')}`)
    .typeError(`${t('validationDiaryForm.label15')}`)
    .positive()
    .integer()
    .max(500, `${t('validationDiaryForm.label11')}`)
    .required(`${t('validationDiaryForm.label4')}`),
  bloodType: Yup.string()
    .oneOf(['1', '2', '3', '4'])
    .required(`${t('validationDiaryForm.label4')}`),
});
  return calculatorSchema
}
