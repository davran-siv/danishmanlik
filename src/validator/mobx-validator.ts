import * as validatorjs from 'validatorjs'
const MobxReactForm: any = require('mobx-react-form')
const {Form} = MobxReactForm

const defaultOptions = {
  validateOnInit: false,
  validateOnBlur: true
}

const defaultPlugins = {
  dvr: validatorjs
}

const defaultHooks = {
  onSuccess(form: any) {
    console.log('Validation passed', form)
  },
  onError(form: any) {
    console.log('Validation failed', form.errors())
  }
}

const ValidationForm = (params: { fields: any, plugins?: any, hooks?: any, options?: any }) => {
  return new Form({fields: params.fields}, {
    plugins: {...defaultPlugins, ...params.plugins},
    hooks: {...defaultHooks, ...params.hooks},
    options: {...defaultOptions, ...params.options}
  })
}

export default ValidationForm
