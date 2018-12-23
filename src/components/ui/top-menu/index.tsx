import * as React from 'react'
import {slide as Menu} from 'react-burger-menu'
import MenuItem from './menu-item'
import './index.scss'

const TopMenu = () => {
  const showSettings = (event: any) => {
    event.preventDefault()
  }

  const mainMenu = menuItems.map((it, i) =>
                                   (<MenuItem key={i} to={`/${it.to}`} className='menu-item'>{it.name}</MenuItem>))

  return (
    <Menu right burgerButtonClassName='right'>
      <nav className='bt-item-list'>
        {mainMenu}
      </nav>
    </Menu>
  )
}

const menuItems = [
  {
    name: 'Главная',
    to: ''
  },
  {
    name: 'Работа в Турции',
    to: 'residence'
  },
  {
    name: 'Медецинская страховка',
    to: 'medical-insurance'
  },
  {
    name: 'Авиабилеты',
    to: ''
  },
  {
    name: 'Юридическая Консультация',
    to: ''
  },
  {
    name: 'Визы в другие страны',
    to: ''
  }
]

export default TopMenu

