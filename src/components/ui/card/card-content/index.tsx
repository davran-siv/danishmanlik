import * as React from 'react'
import {ReactNode} from 'react'
import * as classNames from 'classnames'

interface Props {
  verticalPadding?: string,
  horizontalPadding?: string,
  children?: ReactNode
  className?: string
}

const CardContent = (props: Props) => {
  const style = {
    paddingTop: props.verticalPadding,
    paddingBottom: props.verticalPadding,
    paddingLeft: props.horizontalPadding,
    paddingRight: props.horizontalPadding
  }
  const className = classNames(props.className)
  return (
    <div style={style} className={className}>
      {props.children}
    </div>
  )
}

export default CardContent
