import * as React from 'react'
import {ReactNode} from 'react'

interface Props {
  children: ReactNode
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  alignItems?: 'flex-start' | 'flex-end' | 'center'  | 'baseline' | 'stretch'
}

/**
 *
 * @param {Props} props
 * @param props.justifyContent 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
 * @param props.flexWrap 'nowrap' | 'wrap' | 'wrap-reverse'
 * @param props.alignItems 'flex-start' | 'flex-end' | 'center'  | 'baseline' | 'stretch'
 * @returns {any}
 */
const Flex = (props: Props) => {
  const style = {
    display: 'flex',
    justifyContent: props.justifyContent,
    flexWrap: props.flexWrap,
    alignItems: props.alignItems
  }
  
  return (
    <div className='flex' style={style}>
      {props.children}
    </div>
  )
}

export default Flex
