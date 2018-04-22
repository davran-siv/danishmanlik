import * as React from 'react'
import * as classNames from 'classnames'
import {ReactNode} from 'react'
import {IAccordionProps} from '../../index'


const AccordionItemBody = (props: IAccordionProps) => {
  const classname = classNames('accordion-body', props.className)
  
  return (
    <div className={classname}>
      <p>{props.children}</p>
    </div>
  )
}

export default AccordionItemBody
