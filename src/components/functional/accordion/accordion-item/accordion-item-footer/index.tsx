import * as React from 'react'
import {IAccordionProps} from '../../index'
import * as classNames from 'classnames'

const AccordionItemFooter = (props: IAccordionProps) => {
  const className = classNames('accordion-footer', props.className)
  return(
    <div className={className}>
      {props.children}
    </div>
  )
}

export default AccordionItemFooter
