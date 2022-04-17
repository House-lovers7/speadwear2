import React, { useCallback, useEffect, useState } from 'react'
import { ImageSwiper } from '../components/UIkit'
import { makeStyles } from '@material-ui/styles'
import { useDispatch, useSelector } from 'react-redux'
import { returnCodeToBr } from '../function/common'
import { DetailTable } from '../components/Coordinates'
import { getCoordinates } from '../reducks/coordinates/selectors'

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
  const userId = path.split('/users/')[1].split('/coordinates/')[0]
  const id = path.split(`/users/${userId}/coordinates/`)[1]
  const selectedCoordinate = getCoordinates(selector).filter((coordinate) => coordinate.id == id)
  const [coordinate, setCoordinate] = useState(null)

  useEffect(() => {
    if (id !== '') setCoordinate(selectedCoordinate[0])
  }, [id])

  return (
    <section className="c-section-wrapin">
      {coordinate && (
        <div className="p-grid__row">
          <div className={classes.sliderBox}>
            <ImageSwiper image={coordinate.image} />
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
