import * as React from 'react'
import Clearfix from '../common/clearfix'
import Logo from '../logo'
import {configuration} from '../../../configs'
import FooterSocialNetworks from './footer-social-networks'
import MenuItem from '../top-menu/menu-item'
import FooterContactUs from './footer-contact-us'

const Footer = () => (
  <div className="footer">
    <div className="footer_inner_info_w3ls_agileits">
      <div className="col-md-3 footer-left">
        <h2><Logo/></h2>
        <p>Lorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
        <ul className="social-nav model-3d-0 footer-social social two">
          <FooterSocialNetworks/>
        </ul>
      </div>
      <div className="col-md-9 footer-right">
        <div className="sign-grds">
          <div className="col-md-4 sign-gd">
            <h4>Latest <span>Info</span></h4>
            <ul>
              {footerMenu}
            </ul>
          </div>
          <div className="col-md-3 sign-gd flickr-post">
            <h4>Our <span>Works</span></h4>
            <ul>
            
            </ul>
          </div>
          <FooterContactUs/>
          <Clearfix/>
        </div>
      </div>
      <Clearfix/>
      <p className="copy-right">&amp;copy 2018 {configuration.websiteName}. All rights reserved</p>
    </div>
  </div>
)
const footerMenuItems = [
  {
    name: 'Home',
    to: ''
  },
  {
    name: 'About',
    to: ''
  },
  {
    name: 'Portfolio',
    to: ''
  },
  {
    name: 'Signin',
    to: ''
  },
  {
    name: 'Contact',
    to: ''
  }
]

const footerMenu = footerMenuItems.map((it, i) => (<MenuItem key={i} to={it.to}>{it.name}</MenuItem>))

export default Footer
