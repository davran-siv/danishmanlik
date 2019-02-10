import * as React from 'react'
import {ReactNode} from 'react'

interface Props {
  dropDownName?: string
  children?: ReactNode
}

const MenuDropdown = (props: Props) => (
  <li className="dropdown">
    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
       aria-expanded="false">
      {props.dropDownName} <span className="caret"/>
    </a>
    <ul className="dropdown-menu">
      {props.children}
    </ul>
  </li>
)

export default MenuDropdown
