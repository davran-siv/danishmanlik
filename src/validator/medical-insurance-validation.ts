import i18n from '../common/translate'
import ValidationForm from './mobx-validator'

const MedicalInsuranceValidation = (onSuccess?: (form: any) => void) => ValidationForm(
  {
    fields: [
      {
        name: 'age',
        label: i18n.t('age'),
        placeholder: '',
        rules: 'required|integer|min:0|max:70'
      },
      {
        name: 'gender',
        label: i18n.t('gender'),
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
