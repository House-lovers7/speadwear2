import * as React from 'react'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import NoImage from '../../assets/img/src/no_image.png'
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { deleteItem } from '../../reducks/items/operations'

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      margin: 8,
      width: 'calc(50% - 16px)',
    },
    [theme.breakpoints.up('md')]: {
      margin: 16,
      width: 'calc(33.3333% - 32px)',
    },
  },
  itemContent: {
    display: 'flex',
    padding: '16 8',
    textAlign: 'left',
    '&:last-child': {
      paddingBottom: 16,
    },
  },
  icon: {
    marginRight: 0,
    marginLeft: 'auto',
  },
  media: {
    height: 0,
    paddingTop: '100%',
  },
  price: {
    color: theme.palette.secondary.main,
    fontSize: 16,
  },
  itemName: {
    boxOrient: 'vertical',
    display: '-webkit-box',
    fontSize: 14,
    lineHeight: '18px',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      height: 36,
      lineClamp: 2,
    },
    [theme.breakpoints.up('md')]: {
      height: 18,
      lineClamp: 1,
    },
  },
}))

const ItemCard = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState(null)

  const images = props.images.length > 0 ? props.images : [NoImage]
  const price = props.price.toLocaleString()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={images[0].path}
        onClick={() => dispatch(push('/item/' + props.id))}
        title=""
      />
      <CardContent className={classes.itemContent}>
        <div onClick={() => dispatch(push('/item/' + props.id))}>
          <Typography className={classes.itemName} color="textSecondary" component="p">
            {props.content}
          </Typography>
          <Typography className={classes.price} component="p">
            ¥{price}
          </Typography>
        </div>
        <IconButton onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem
            onClick={() => {
              dispatch(push('/item/edit/' + props.id))
              handleClose()
            }}
          >
            編集する
          </MenuItem>

          <MenuItem
            onClick={() => {
              dispatch(deleteItem(props.id))
              handleClose()
            }}
          >
            削除する
          </MenuItem>
        </Menu>
      </CardContent>
    </Card>
  )
}
export default ItemCard