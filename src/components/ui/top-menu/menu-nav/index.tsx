import * as React from 'react'
import MenuItem from '../menu-item'
import MenuDropdown from '../menu-dropdown'

interface Props {
}

const MenuNav = (props: Props) => {
  return (
    <div id="navbar" className="navbar-collapse collapse">
      <div className="nav_right_top">
        {/*<ul className="nav navbar-nav navbar-right">*/}
          {/*<MenuItem to='' className='request'>Send Request</MenuItem>*/}
        {/*</ul>*/}
        <ul className="nav navbar-nav">
          {mainMenu}
          {/*{dropdownMenu}*/}
        </ul>
      </div>
    </div>
  )
}

const menuItems = [
  {
    name: 'Оформление ВНЖ',
    to: 'residence'
  },
  {
    name: 'Медецинские страховки',
    to: 'medical-insurance'
  },
  {
    name: 'Перевод документов',
    to: ''
  },
  {
    name: 'Визы',
    to: ''
  }
]

const dropdownMenuItems = [
  {
    name: 'Projects',
    to: ''
  },
  {
    name: 'Services',
    to: ''
  }
]

const mainMenu = menuItems.map((it, i) =>
                                 (<MenuItem key={i} to={`/${it.to}`} className='request'>{it.name}</MenuItem>))

const dropdownMenu =
  <MenuDropdown dropDownName='Dropdown'>
    {dropdownMenuItems.map((it, i) => (<MenuItem key={i} to={it.to} className='request'>{it.name}</MenuItem>))}
  </MenuDropdown>

export default MenuNav
