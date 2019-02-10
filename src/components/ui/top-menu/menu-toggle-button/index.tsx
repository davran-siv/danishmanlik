import * as React from 'react'

interface Props {
}

const MenuToggleButton = (Props: Props) => (
  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar">
    <span className="sr-only">Toggle navigation</span>
    <span className="icon-bar"/>
    <span className="icon-bar"/>
    <span className="icon-bar"/>
  </button>
)

export default MenuToggleButton
