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
  const className = classNames({active: props.isActive})
  return (<li className={className}><LinkTo to={props.to}>{props.children}</LinkTo></li>)
}

export default MenuItem
