import * as React from 'react'
import * as classNames from 'classnames'
import AccordionItemTitle from './accordion-item-title'
import {IAccordionItemProps} from '../index'
import {observer} from 'mobx-react'
import {ReactElement} from 'react'

export default class AccordionItem extends React.Component<IAccordionItemProps, {}> {
  render() {
    const {props} = this
    const className = classNames('accordion-item', props.className, {"active": props.isOpen})
  
    const accordionItem = React.Children.map(props.children, (child, i) => {
      if (React.isValidElement(child) && child.type === AccordionItemTitle) {
        return React.cloneElement(child as ReactElement<any>, {
          toggle: this.props.toggle,
        })
      }
      return child
    })
    
    return (
      <div className={className}>
        {accordionItem}
      </div>
    )
  }
}
