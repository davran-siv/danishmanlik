import * as React from 'react'
import * as classNames from 'classnames'
import {ReactNode} from 'react'

interface Props {
  className?: string
  children?: ReactNode
  childAct?: any
  parentAct?: () => void
}

export default class AccordionItemTitle extends React.Component<Props, {}> {
  render() {
    const classname = classNames('accordion-title', this.props.className)
  
    return (
      <div className={classname}>
        {this.props.children}
      </div>
    )
  }
}
