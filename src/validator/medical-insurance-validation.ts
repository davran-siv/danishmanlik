import ValidationForm from './mobx-validator'

const MedicalInsuranceValidation = () => ValidationForm(
  {
    fields: [
      {
        name: 'age',
        label: 'Введите Ваш возраст',
        placeholder: '',
        rules: 'required'
      }
    ]
  })

export default MedicalInsuranceValidation
