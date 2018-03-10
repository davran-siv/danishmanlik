import * as React from 'react'
import {ReactNode} from 'react'

interface Props {
  children?: ReactNode,
  flexGrow?: number
}

const FlexBox = (props: Props) => {
  const style = {
    flexGrow: props.flexGrow || 0
  }
  
  return (
    <div style={style}>
      {props.children}
    </div>
  )
}

export default FlexBox
