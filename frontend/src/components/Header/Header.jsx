import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { useDispatch, useSelector } from 'react-redux'
import { getIsSignedIn } from '../../reducks/users/selectors'
import { HeaderMenu, ClosableDrawer } from './index'
import { push } from 'connected-react-router'
import { useState } from 'react'
import { useCallback } from 'react'
// import logo from '../../assets/img/icons/logo.png'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuBar: {
      backgroundColor: '#fff',
      color: '#444',
    },
    toolbar: {
      margin: '0 auto',
      maxWidth: 1024,
      width: '100%',
    },
    iconButtons: {
      margin: '0 0 0 auto',
    },
  })
)

const Header = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const isSignedIn = getIsSignedIn(selector)

  const [sideBarOpen, setSideBarOpen] = useState(false)
  //Drawerの設定
  const handleDrawerToggle = useCallback(
    (event, isOpen) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return
      }
      setSideBarOpen(isOpen)
    },
    [setSideBarOpen]
  )

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.menuBar}>
        <Toolbar className={classes.toolbar}>
          {/* Logoボタンをクリックするともどる */}
          {/* <img alt="Logo" src={logo} width="128px" onClick={() => dispatch(push('/'))} role="button" /> */}
          {/* {isSignedIn && (
            <div className={classes.iconButtons}>
              <HeaderMenu handleDrawerToggle={handleDrawerToggle} />
            </div>
          )} */}
          {
            <div className={classes.iconButtons}>
              <HeaderMenu handleDrawerToggle={handleDrawerToggle} />
            </div>
          }
        </Toolbar>
      </AppBar>
      <ClosableDrawer open={sideBarOpen} onClose={handleDrawerToggle} />
    </div>
  )
}

export default Header
