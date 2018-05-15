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

export default TopMenu

