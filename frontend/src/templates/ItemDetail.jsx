import React, { useCallback, useEffect, useState } from 'react'
import { ImageSwiper } from '../components/UIkit'
import { makeStyles } from '@material-ui/styles'
import { useDispatch, useSelector } from 'react-redux'
import { db, FirebaseTimestamp } from '../firebase'
import { returnCodeToBr } from '../function/common'
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
  const id = path.split('/item/')[1]

  const [item, setItem] = useState(null)
  const addItem = useCallback(
    (selectedSize) => {
      const timestamp = FirebaseTimestamp.now()
      dispatch(
        addItemToCart({
          added_at: timestamp,
          description: item.description,
          gender: item.gender,
          images: item.images,
          name: item.name,
          price: item.price,
          itemId: item.id,
          quantity: 1,
          size: selectedSize,
        })
      )
    },
    [item]
  )

  useEffect(() => {
    db.collection('items')
      .doc(id)
      .get()
      .then((doc) => {
        const data = doc.data()
        setItem(data)
      })
  }, [])

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
            {/* <SizeTable addItem={addItem} sizes={item.size} /> */}
            <div className="module-spacer--small" />
            <p>{returnCodeToBr(item.description)}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default ItemDetail
