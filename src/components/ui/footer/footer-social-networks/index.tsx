import * as React from 'react'
import {SOCIAL_BRANDS} from '../../../../const/social-brands'
import SocialIcon from '../../social-icon'

const FooterSocialNetworks = () => {
  const socialNetworksList = socialNetworks.map((it, i) => <SocialIcon key={i} brand={it.brand} path={it.path}/>)
  return (<div>{socialNetworksList}</div>)
}

const socialNetworks = [
  {
    brand: SOCIAL_BRANDS.facebook,
    path: 'www.facebook.com'
  },
  {
    brand: SOCIAL_BRANDS.instagram,
    path: 'www.instagram.com'
  },
  {
    brand: SOCIAL_BRANDS.pinterest,
    path: 'www.pinterest.com'
  },
  {
    brand: SOCIAL_BRANDS.twitter,
    path: 'www.twitter.com'
  }
]

export default FooterSocialNetworks
