import * as React from 'react'
import {ReactNode} from 'react'
import * as classNames from 'classnames'
import './index.scss'

interface Props {
  children?: ReactNode
  className?: string
  paddingTop?: string
  paddingRight?: string
  paddingBottom?: string
  paddingLeft?: string
}

const Card = (props: Props) => {
  const className = classNames('card', props.className)
  const style = {
    paddingTop: props.paddingTop,
    paddingRight: props.paddingRight,
    paddingBottom: props.paddingBottom,
    paddingLeft: props.paddingLeft
  }
  return (
    <div style={style} className={className}>
      {props.children}
    </div>
  )
}

export default Card
