import * as React from 'react'
import { configuration } from '../../../../configs'
import {SOCIAL_BRANDS} from '../../../../const/social-brands'
import SocialIcon from '../../social-icon'

const FooterSocialNetworks = () => {
  const socialNetworksList = socialNetworks.map((it, i) => <SocialIcon key={i} brand={it.brand} path={it.path}/>)
  return (<div>{socialNetworksList}</div>)
}

const socialNetworks = [
  {
    brand: SOCIAL_BRANDS.facebook,
    path: configuration.contacts.facebookUrl
  },
  {
    brand: SOCIAL_BRANDS.instagram,
    path: configuration.contacts.instagramUrl
  }
]

export default FooterSocialNetworks
