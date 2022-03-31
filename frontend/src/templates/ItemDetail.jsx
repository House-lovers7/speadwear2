import React, { useCallback, useEffect, useState } from 'react'
import { ImageSwiper } from '../components/UIkit'
import { getItems } from '../reducks/items/selectors'
import { makeStyles } from '@material-ui/styles'
import { useDispatch, useSelector } from 'react-redux'
import { db, FirebaseTimestamp } from '../firebase'
import { returnCodeToBr } from '../function/common'
import { DetailTable } from '../components/Items'
import { fetchAllItems } from '../reducks/items/operations'
// import {returnCodeToBr} from "../function/common";

const useStyles = makeStyles((theme) => ({
  sliderBox: {
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto 24px auto',
      height: 320,
      width: 320,
    },
    [theme.breakpoints.up('sm')]: {
      margin: '0 auto',
      height: 400,
      width: 400,
    },
  },
  detail: {
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto 16px auto',
      height: 320,
      width: 320,
    },
    [theme.breakpoints.up('sm')]: {
      margin: '0 auto',
      height: 'auto',
      width: 400,
    },
  },
  price: {
    fontSize: 36,
  },
}))

const ItemDetail = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const path = selector.router.location.pathname
  const userId = path.split('/users/')[1].split('/items/')[0]
  const id = path.split(`/users/${userId}/items/`)[1]
  const [item, setItem] = useState(null)
  const items = getItems(selector)

  // const findId = (item) => {
  //   return item.id === id
  // }
  // function findId(item) {
  //   return item.id === id
  // }

  // console.log(items.find(findId))
  // const selectedItem = items.find((v) => v.id === id)
  // const selectedItem = items.map(element => console.log(element.id))
  // const selectedItem = items.map(element => element.includes(("id:" + " " + id)))
  // const selectedItem = items.filter(element => element.includes(("id:" + " " + id)))
  // const selectedItem = items.filter(element => element.id === id)
  // console.log("id:" + " " + id)

  console.log(id)
  console.log(items)

  // console.log(selectedItem)

  useEffect(() => {
    if (id !== '') dispatch(fetchAllItems(userId, id))
  }, [id])

  return (
    <section className="c-section-wrapin">
      {item && (
        <div className="p-grid__row">
          <div className={classes.sliderBox}>
            <ImageSwiper images={item.images} />
          </div>
          <div className={classes.detail}>
            <h2 className="u-text__headline">{item.content}</h2>
            <p className={classes.price}>¥{item.price.toLocaleString()}</p>
            <div className="module-spacer--small" />
            <DetailTable />
            <div className="module-spacer--small" />
            <p>季節:{item.season}</p>
            <p>TPO:{item.tpo}</p>
            <p>評価：{item.rating}</p>
            <p>{returnCodeToBr(item.description)}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default ItemDetail
