import * as React from 'react'
import * as classNames from 'classnames'
import {ReactNode} from 'react'

interface Props {
  className?: string
  children?: ReactNode
}

const AccordionItemBody = (props: Props) => {
  const classname = classNames('accordion-body', props.className)
  
  return (
    <div className={classname}>
      <p>{props.children}</p>
    </div>
  )
}

export default AccordionItemBody
