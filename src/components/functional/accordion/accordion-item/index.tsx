import * as React from 'react'
import * as classNames from 'classnames'
import {ReactNode} from 'react'
import AccordionItemTitle from './accordion-item-title'
import AccordionItemBody from './accordion-item-body'
import {IAccordionItem} from '../index'
import {observer} from 'mobx-react'

interface Props extends IAccordionItem {
  isOpen?: boolean
  toggle?: any
  className?: string
  children?: ReactNode
  
}

@observer
export default class AccordionItem extends React.Component<Props, {}> {
  
  
  render() {
    const {props} = this
    const className = classNames('accordion-item', props.className)
    const titleClassName = classNames('accordion-title', {'active': this.props.isOpen})
    const bodyClassName = classNames({'active': this.props.isOpen})
    return (
      <div className={className}>
        <button className={titleClassName} onClick={props.toggle}>{props.title}</button>
        <AccordionItemBody className={bodyClassName}>{props.body}</AccordionItemBody>
      </div>
    )
  }
}
