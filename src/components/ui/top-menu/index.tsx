import * as React from 'react'
import MenuToggleButton from './menu-toggle-button'
import MenuLogo from './menu-logo'
import MenuNav from './menu-nav'

const TopMenu = () => (
  
  <div className="top_header" id="home">
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="nav_top_fx_w3ls_agileinfo">
        <div className="navbar-header">
          <MenuToggleButton/>
          <MenuLogo/>
        </div>
        <MenuNav/>
      </div>
    </nav>
  </div>
)

export default TopMenu

