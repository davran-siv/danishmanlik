import ValidationForm from './mobx-validator'

const MedicalInsuranceValidation = (onSuccess?: Function) => ValidationForm(
  {
    fields: [
      {
        name: 'age',
        label: 'Возраст',
        placeholder: '',
        rules: 'required|integer|min:0|max:70'
      },
      {
        name: 'gender',
        label: 'Пол',
        placeholder: '',
        rules: 'required'
      }
    ],
    hooks: {
      onSuccess: onSuccess
    }
  }
  )

export default MedicalInsuranceValidation
