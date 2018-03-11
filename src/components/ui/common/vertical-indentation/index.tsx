import * as React from 'react'
import {ReactNode} from 'react'

interface Props {
  verticalIndentation?: string
  children?: ReactNode
}

const VerticalIndentation = (props: Props) => {
  const style = {
    paddingTop: props.verticalIndentation,
    paddingBottom: props.verticalIndentation
  }
  return (
    <div style={style}>
      {props.children}
    </div>
  )
}

export default VerticalIndentation
