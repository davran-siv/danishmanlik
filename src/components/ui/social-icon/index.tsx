import * as React from 'react'
import {SOCIAL_BRANDS} from '../../../const/social-brands'
import classNames = require('classnames')
import LinkTo from '../common/link-to'

interface Props {
  brand: SOCIAL_BRANDS
  path: string
}

const SocialIcon = (props: Props) => {
  const brandClassName = classNames(props.brand)
  
  return (
    <li>
      <LinkTo to={props.path} className={brandClassName}>
        <div className="front"><i className={`fa fa-${brandClassName}`} aria-hidden="true"/></div>
        <div className="back"><i className={`fa fa-${brandClassName}`} aria-hidden="true"/></div>
      </LinkTo>
    </li>
  )
}

export default SocialIcon
