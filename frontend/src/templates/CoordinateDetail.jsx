import React, { useCallback, useEffect, useState } from 'react'
import { ImageSwiper } from '../components/UIkit'
import { makeStyles } from '@material-ui/styles'
import { useDispatch, useSelector } from 'react-redux'
import { db, FirebaseTimestamp } from '../firebase'
import { returnCodeToBr } from '../function/common'
import { DetailTable } from '../components/Coordinates'
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

const CoordinateDetail = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const path = selector.router.location.pathname
  const id = path.split('/coordinate/')[1]

  const [coordinate, setCoordinate] = useState(null)
  const addCoordinate = useCallback(
    (selectedSize) => {
      const timestamp = FirebaseTimestamp.now()
      dispatch(
        addCoordinateToCart({
          added_at: timestamp,
          description: coordinate.description,
          gender: coordinate.gender,
          images: coordinate.images,
          name: coordinate.name,
          price: coordinate.price,
          coordinateId: coordinate.id,
          quantity: 1,
          size: selectedSize,
        })
      )
    },
    [coordinate]
  )

  useEffect(() => {
    db.collection('coordinates')
      .doc(id)
      .get()
      .then((doc) => {
        const data = doc.data()
        setCoordinate(data)
      })
  }, [])

  return (
    <section className="c-section-wrapin">
      {coordinate && (
        <div className="p-grid__row">
          <div className={classes.sliderBox}>
            <ImageSwiper images={coordinate.images} />
          </div>
          <div className={classes.detail}>
            <h2 className="u-text__headline">{coordinate.content}</h2>
            <p className={classes.price}>¥{coordinate.price.toLocaleString()}</p>
            <div className="module-spacer--small" />
            <DetailTable />
            <div className="module-spacer--small" />
            <p>季節:{coordinate.season}</p>
            <p>TPO:{coordinate.tpo}</p>
            <p>評価：{coordinate.rating}</p>
            <p>{returnCodeToBr(coordinate.description)}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default CoordinateDetail
