import ValidationForm from './mobx-validator'

const ContactValidation = (onSuccess?: Function) => ValidationForm(
  {
    fields: [
      {
        name: 'name',
        label: 'Имя',
        placeholder: '',
        rules: 'required'
      },
      {
        name: 'email',
        label: 'Email',
        placeholder: '',
        rules: 'required|email'
      },
      {
        name: 'telephone',
        label: 'Телефон',
        placeholder: '',
        rules: 'required'
      },
      {
        name: 'message',
        label: 'Сообщение',
        placeholder: '',
        rules: 'required'
      }
    ],
    hooks: {
      onSuccess: onSuccess
    }
  }
)

export default ContactValidation
