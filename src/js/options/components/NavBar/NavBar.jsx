import PropTypes from 'prop-types'
import webExtension from 'webextension-polyfill'
import {createElement} from 'react'

import '../../../../css/options/nav-bar.css'
import NavBarItem from './NavBarItem'
import {
  NAV_MODULE_CONTRIBUTORS,
  NAV_MODULE_CONTROL,
  NAV_MODULE_GENERAL,
  NAV_MODULE_USER_INTERFACE
} from '../../constants'

const navBarItemInfos = [
  {
    navModule: NAV_MODULE_GENERAL,
    title: webExtension.i18n.getMessage('general')
  },
  {
    navModule: NAV_MODULE_USER_INTERFACE,
    title: webExtension.i18n.getMessage('userInterface')
  },
  {
    navModule: NAV_MODULE_CONTROL,
    title: webExtension.i18n.getMessage('control')
  },
  {
    navModule: NAV_MODULE_CONTRIBUTORS,
    title: webExtension.i18n.getMessage('contributors')
  }
]

const NavBar = (props) => {
  const {selectedNavModule, switchNavModule} = props

  const navItems = navBarItemInfos.map((navBarItemInfo) => {
    const {navModule, title} = navBarItemInfo

    return (
      <NavBarItem
        key={navModule}
        isActive={navModule === selectedNavModule}
        navModule={navModule}
        switchNavModule={switchNavModule}
        title={title}
      />
    )
  })

  return <nav styleName='main'>{navItems}</nav>
}

NavBar.propTypes = {
  selectedNavModule: PropTypes.string.isRequired,
  switchNavModule: PropTypes.func.isRequired
}

export default NavBar
