import React from 'react'
import Table from '@material-ui/core/Table'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import IconButton from '@material-ui/core/IconButton'
import SurfingIcon from '@mui/icons-material/Surfing'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import TableContainer from '@material-ui/core/TableContainer'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  iconCell: {
    padding: 0,
    height: 48,
    width: 48,
  },
})

const DetailTable = (props) => {
  const classes = useStyles()

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell>季節:{props.season}</TableCell>
            <IconButton className={classes.iconCell}>
              <SurfingIcon />
            </IconButton>
          </TableRow>
          <TableRow>
            <TableCell>TPO:{props.tpo}</TableCell>
            <IconButton className={classes.iconCell}>
              <FavoriteBorderIcon />
            </IconButton>
          </TableRow>
          <TableRow>
            <TableCell>評価:{props.rating}</TableCell>
            <IconButton className={classes.iconCell}>
              <StarBorderIcon />
            </IconButton>
          </TableRow>
          <TableRow>
            <TableCell>ひとこと:{props.description}</TableCell>
            <IconButton className={classes.iconCell}>
              <ChatBubbleOutlineIcon />
            </IconButton>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DetailTable
