import * as React from 'react'
import './index.scss'
import {ReactElement, ReactNode} from 'react'
import AccordionItem from './accordion-item'

export interface IAccordionItemProps {
  isOpen?: boolean
  toggle?: any
  className?: string
  children?: ReactNode
}

export interface IAccordionProps {
  children: ReactNode
  className?: string
}

interface State {
  accordionOpenItemIndex: number | null
}


export default class Accordion extends React.Component<IAccordionProps, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      accordionOpenItemIndex: null
    }
  }
  
  toggle = (i: number) => {
    this.setState(prevState => ({accordionOpenItemIndex: (prevState.accordionOpenItemIndex === i) ? null : i}))
  }
  
  render() {
    const {props} = this
    
    const accordionItems = React.Children.map(props.children, (child, i) => {
      if (React.isValidElement(child) && child.type === AccordionItem) {
        return React.cloneElement(child as ReactElement<any>, {
          toggle: () => this.toggle(i),
          isOpen: (this.state.accordionOpenItemIndex === i)
        })
      }
      return child
    })
    
    return (
      <div className='accordion'>
        {accordionItems}
      </div>
    )
  }
}
