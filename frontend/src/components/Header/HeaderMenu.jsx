import React, { useEffect } from 'react'
import IconButton from '@material-ui/core/IconButton'
import { Badge } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { getUserId } from '../../reducks/users/selectors'
import { push } from 'connected-react-router'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import MessageIcon from '@mui/icons-material/Message'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import MenuIcon from '@material-ui/icons/Menu'

const HeaderMenu = (props) => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const userId = getUserId(selector)

  return (
    <>
      <IconButton onClick={() => dispatch(push('/cart'))}>
        <Badge badgeContent={3} color="secondary">
          <NotificationsNoneIcon />
        </Badge>
      </IconButton>
      <IconButton onClick={() => dispatch(push(''))}>
        <MessageIcon />
      </IconButton>
      <IconButton onClick={() => dispatch(push(''))}>
        <FavoriteBorderIcon />
      </IconButton>
      <IconButton
        aria-label="Menu Items"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={(e) => props.handleDrawerToggle(e, true)}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
    </>
  )
}

export default HeaderMenu
