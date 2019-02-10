import * as React from 'react'
import './index.scss'
import * as classnames from "classnames"
import {observer} from 'mobx-react'

interface DefaultTextareaProps {
  onChange?: (event: any) => void
  placeholder?: string
  form?: any
  field?: string
  value?: string | number | null
  errorMessage?: string
  label?: string
  disabled?: boolean
  mask?: string
  rows?: number
}

const onChangeHandler = (props: DefaultTextareaProps, bindings: any) => (event: any) => {
  // pass event to user defined callbacks (if any)
  props.onChange && props.onChange(event)
  // pass event to validation (if any)
  bindings && bindings.onChange(event)
}

const DefaultTextarea = observer((props: DefaultTextareaProps) => {
  const {form, field, placeholder} = props
  
  const formExist = form && field && form.$(field)
  const label = formExist ? form.$(field).label : props.label
  const value = formExist ? form.$(field).value : props.value
  const errorMessage = formExist ? form.$(field).error : props.errorMessage
  const bindings = formExist ? form.$(field).bind() : {}
  
  const classes = classnames({
                               'default-input': true,
                               'has-error': errorMessage,
                               'not-empty': value
                             })
  
  const labelElement = label ? <label>{label}</label> : null
  
  return (
    <div className="default-textarea-wrapper">
      <textarea
        {...bindings}
        rows={props.rows}
        className={classes}
        placeholder={placeholder}
        onChange={onChangeHandler(props, bindings)}
        disabled={props.disabled}
        value={value}
      />
      {labelElement}
      <div className="error-message">{errorMessage}</div>
    </div>
  )
})

export default DefaultTextarea
