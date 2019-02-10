import * as React from 'react'
import {ReactNode} from 'react'
import * as classNames from 'classnames'

interface Props {
  children: ReactNode,
  flexGrow?: number
  className?: string
}

const FlexBox = (props: Props) => {
  const style = {
    flexGrow: props.flexGrow || 0
  }
  
  const className = classNames(props.className)
  
  return (
    <div style={style} className={className}>
      {props.children}
    </div>
  )
}

export default FlexBox
