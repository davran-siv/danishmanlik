import * as React from 'react'
import {ReactNode} from 'react'
import * as classNames from 'classnames'

interface Props {
  children?: ReactNode
  className?: string
  paddingTop?: string
  paddingRight?: string
  paddingBottom?: string
  paddingLeft?: string
}

const Card = (props: Props) => {
  const classaName = classNames(props.className)
  const style = {
    paddingTop: props.paddingTop,
    paddingRight: props.paddingRight,
    paddingBottom: props.paddingBottom,
    paddingLeft: props.paddingLeft
  }
  return (
    <div style={style} className={classaName}>
      {props.children}
    </div>
  )
}

export default Card
