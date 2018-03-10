import * as React from "react";
import {ReactNode} from "react";
import {Link} from 'react-router-dom'

interface Props {
  to: string
  children?: ReactNode
  className?: string
}

const LinkTo = (props: Props) => {
  const {to, ...rest} = props
  
  return (/^https?:\/\//.test(props.to)
      ? <a target='_blank' href={to} {...rest}/>
      : <Link {...props} />
  )
};

export default LinkTo
