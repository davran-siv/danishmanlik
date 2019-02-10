import * as React from 'react'
import LinkTo from '../common/link-to'
import {configuration} from '../../../configs'

interface Props {
  withMotto?: boolean
}

const Logo = (props: Props) => (
  <LinkTo to='/'><i className="fa fa-clone" aria-hidden="true"/> {configuration.companyName}
    {(props.withMotto) && <span className="desc">{configuration.websiteMotto}</span>}
  </LinkTo>
)

export default Logo
