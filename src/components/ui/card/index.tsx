import * as React from 'react'
import {ReactNode} from 'react'

interface Props {
  children?: ReactNode
  paddingTop?: string
  paddingRight?: string
  paddingBottom?: string
  paddingLeft?: string
}

const Card = (props: Props) => {
  const style = {
    paddingTop: props.paddingTop,
    paddingRight: props.paddingRight,
    paddingBottom: props.paddingBottom,
    paddingLeft: props.paddingLeft,
  }
  return (
    <div style={style}>
      {props.children}
    </div>
  )
}

export default Card
