import * as React from 'react'
import { slide as Menu } from 'react-burger-menu'
import i18n from '../../../common/translate'
import SelectLanguage from '../../functional/select-language'
import MenuItem from './menu-item'
import './index.scss'

const TopMenu = () => {
  const mainMenu = menuItems.map((it, i) =>
                                   (<MenuItem key={i} to={`/${it.to}`} className='menu-item'>{it.name}</MenuItem>))

  return (
    <Menu right burgerButtonClassName='right'>
      <nav className='bt-item-list'>
        {mainMenu}
        <SelectLanguage/>
      </nav>
    </Menu>
  )
}

const menuItems = [
  {
    name: i18n.t('menuItems.homePage'),
    to: ''
  },
  {
    name: i18n.t('menuItems.workInTurkey'),
    to: 'residence'
  },
  {
    name: i18n.t('menuItems.medicalInsurance'),
    to: 'medical-insurance'
  },
  {
    name: i18n.t('menuItems.flights'),
    to: 'flights'
  },
  {
    name: i18n.t('menuItems.lawConsultation'),
    to: 'law-consultation'
  },
  {
    name: i18n.t('menuItems.visasToOtherCountries'),
    to: 'visas-to-other-countries'
  }
]

export default TopMenu

