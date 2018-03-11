import * as React from 'react'
import Select from 'react-select'
import 'react-select/scss/default.scss'
import './index.scss'
import {observer} from 'mobx-react'

interface Props {
  options: Array<any>
  value?: string
  placeholder?: string
  disabled?: boolean
  searchable?: boolean
  clearable?: boolean
  onChange?: (value: any) => void
  errorMessage?: string
  form?: any
  field?: string
  label?: string
}

const onChangeHandler = (props: Props, form?: any, field?: string) => (selectedOption: any) => {
  // pass event to user defined callbacks (if any)
  props.onChange && props.onChange(selectedOption)
  
  // pass event to validation (if any)
  form && form.update({[field!]: selectedOption.value})
  
}

const DefaultSelect = observer((props: Props) => {
  const {form, field} = props
  
  if (form ? !field : field) { // xor
    throw new Error('One of properties "field" and "form" is undefined.' +
      ' Validated select requires both "form" and "field" properties')
  }
  const formExist = form && field && form.$(field)
  const bindings = formExist ? form.$(field).bind() : {}
  const label = formExist ? form.$(field).label : props.label
  const errorMessage = formExist ? form.$(field).error : props.errorMessage
  const value = formExist ? form.$(field).value : props.value
  
  const labelElement = label ? <label>{props.label || form.$(field).label}</label> : null
  const errorElement = errorMessage ? <div className="error-message">{errorMessage}</div> : null
  
  return (
    <div className='default-select-wrapper'>
      <Select
        {...bindings}
        disabled={props.disabled}
        className={`default-select ${form && form.$(field!).hasError ? 'has-error' : ''}`}
        onChange={onChangeHandler(props, form, field)}
        searchable={props.searchable}
        options={props.options}
        value={value}
        autosize={false}
        clearable={props.clearable}
      />
      {labelElement}
      {errorElement}
    </div>
  )
})

export default DefaultSelect
