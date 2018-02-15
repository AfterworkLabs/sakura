import React from 'react'
import AppBar from 'material-ui/AppBar'

const Navbar = ({ toggleMenu }) => (
  <AppBar
    title="Randomizer"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    onLeftIconButtonClick={toggleMenu}
  />
)

export default Navbar
