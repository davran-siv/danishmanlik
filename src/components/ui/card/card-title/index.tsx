import * as React from 'react'
import {ReactNode} from 'react'
import classNames = require('classnames')
import './index.scss'

interface Props {
  className?: string
  children?: ReactNode
}

const CardTitle = (props: Props) => {
  const className = classNames('card-title', props.className)
  return(
    <h3 className={className}>{props.children}</h3>
  )
}

export default CardTitle
