import * as Yup from 'yup';

const calculatorSchema = Yup.object().shape({
  height: Yup.number()
    .min(100, 'validationDiaryForm.label1')
    .typeError('validationDiaryForm.label3')
    .positive()
    .integer('validationDiaryForm.label3')
    .max(250, 'validationDiaryForm.label2')
    .required('validationDiaryForm.label4'),
  age: Yup.number()
    .min(18, 'validationDiaryForm.label5')
    .positive()
    .integer()
    .max(100, 'validationDiaryForm.label6')
    .required('validationDiaryForm.label4'),
  curWeight: Yup.number()
    .min(20, 'validationDiaryForm.label8')
    .positive()
    .integer('validationDiaryForm.label14')
    .max(500, 'validationDiaryForm.label9')
    .required('validationDiaryForm.label4'),
  desWeight: Yup.number()
    .min(20, 'validationDiaryForm.label10')
    .positive()
    .integer('validationDiaryForm.label15')
    .max(500, 'validationDiaryForm.label11')
    .required('validationDiaryForm.label4'),
  bloodType: Yup.string()
    .oneOf(['1', '2', '3', '4'])
    .required('validationDiaryForm.label4'),
});

export default calculatorSchema;
