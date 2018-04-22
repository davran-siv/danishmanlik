import * as React from 'react'
import * as classNames from 'classnames'
import {IAccordionItemProps} from '../../index'

const AccordionItemTitle = (props: IAccordionItemProps) => {
    const classname = classNames('accordion-title', props.className)
  
    return (
      <button className={classname} onClick={props.toggle}>{props.children}</button>
    )
}

export default AccordionItemTitle
