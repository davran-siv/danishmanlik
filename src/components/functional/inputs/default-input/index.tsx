import * as React from 'react'
import './index.scss'
import * as classnames from "classnames"
import {observer} from 'mobx-react'

interface DefaultInputProps {
  onChange?: (event: any) => void
  placeholder?: string
  form?: any
  field?: string
  value?: string | number | null
  errorMessage?: string
  type?: 'text' | 'number' | 'email' | 'file' | 'date' | 'checkbox'
  label?: string
  disabled?: boolean
  mask?: string
}

const onChangeHandler = (props: DefaultInputProps, bindings: any) => (event: any) => {
  // pass event to user defined callbacks (if any)
  props.onChange && props.onChange(event)
  // pass event to validation (if any)
  bindings && bindings.onChange(event)
}

const DefaultInput = observer((props: DefaultInputProps) => {
  const {form, field, placeholder} = props
  
  const formExist = form && field && form.$(field)
  const label = formExist ? form.$(field).label : props.label
  const value = formExist ? form.$(field).value : props.value
  const errorMessage = formExist ? form.$(field).error : props.errorMessage
  const bindings = formExist ? form.$(field).bind() : {}
  const type = props.type || 'text'
  
  const classes = classnames({
                               'default-input': true,
                               'has-error': errorMessage,
                               'not-empty': value
                             })
  
  const labelElement = label ? <label>{label}</label> : null
  
  return (
    <div className="default-input-wrapper">
      <input
        {...bindings}
        className={classes}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler(props, bindings)}
        type={type}
        disabled={props.disabled}
      />
      {labelElement}
      <div className="error-message">{errorMessage}</div>
    </div>
  )
})

export default DefaultInput
