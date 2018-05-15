import * as React from 'react'
import {ReactNode} from 'react'
import classNames = require('classnames')
import LinkTo from '../../common/link-to'

interface Props {
  to: string
  children: ReactNode
  isActive?: boolean
  className?: string
}

const MenuItem = (props: Props) => {
  const className = classNames(props.className, {active: props.isActive})
  return (<LinkTo to={props.to} className={className}>{props.children}</LinkTo>)
}

export default MenuItem
