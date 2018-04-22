import * as React from 'react'
import './index.scss'
import {ReactNode} from 'react'
import AccordionItem from './accordion-item'

export interface IAccordionItem {
  title: string
  body: string
}

interface AccordionProps {
  children?: ReactNode
  childAct?: any
  items: IAccordionItem[]
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
    const accordionItems = this.props.items.map((it, i) => {
      return (
        <AccordionItem key={i}
                       title={it.title}
                       body={it.body}
                       isOpen={(i === this.state.accordionOpenItemIndex)}
                       toggle={() => {
                         this.toggle(i)
                       }}
        />
      )
    })
    
    return (
      <div className='accordion'>
        {accordionItems}
      </div>
    )
  }
}
