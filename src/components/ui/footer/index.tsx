import * as React from 'react'
import Clearfix from '../common/clearfix'
import Logo from '../logo'
import {configuration} from '../../../configs'
import FooterSocialNetworks from './footer-social-networks'
import MenuItem from '../top-menu/menu-item'
import FooterContactUs from './footer-contact-us'

const Footer = () => (
  <div className="footer" id='contacts'>
    <div className="footer_inner_info_w3ls_agileits">
      <div className="col-md-3 footer-left">
        <h2><Logo/></h2>
        <p>Следите за нами в социальных сетях</p>
        <ul className="social-nav model-3d-0 footer-social social two">
          <FooterSocialNetworks/>
        </ul>
      </div>
      <div className="col-md-4"/>
      <div className="col-md-5 footer-right">
        <div className="sign-grds">
          <FooterContactUs/>
          <Clearfix/>
        </div>
      </div>
      <Clearfix/>
      <p className="copy-right">
        &reg; 2016 - {new Date().getFullYear()} {configuration.companyName}. Все права защищены
      </p>
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
