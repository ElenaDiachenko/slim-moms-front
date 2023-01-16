import * as yup from 'yup';

export const RegisterSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'validationRegisterForm.label1')
    .max(15)
    .required('validationDiaryForm.label4'),
  email: yup
    .string()
    .email('validationRegisterForm.label2')
    .required('validationDiaryForm.label4'),
  password: yup
    .string()
    .min(8, 'validationRegisterForm.label3')
    .max(100)
    .required('validationDiaryForm.label4'),
});
