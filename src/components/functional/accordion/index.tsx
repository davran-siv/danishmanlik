import * as React from 'react'
import './index.scss'
import {ReactChild, ReactElement, ReactNode} from 'react'
import AccordionItem from './accordion-item'

export interface IAccordionItem {
  title: string
  body: string
  isOpen?: boolean
  toggle?: any
  className?: string
  children?: ReactNode
}

interface AccordionProps {
  children: ReactNode
  // items: IAccordionItem[]
}

interface State {
  accordionOpenItemIndex: number | null
}


export default class Accordion extends React.Component<AccordionProps, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      accordionOpenItemIndex: null
    }
  }
  
  toggle = (i: number) => {
    this.setState({accordionOpenItemIndex: i})
  }
  
  render() {
    const {props} = this
    
    const accordionItems = React.Children.map(props.children, (child, i) => {
      console.log(i)
      if (React.isValidElement(child)) {
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
