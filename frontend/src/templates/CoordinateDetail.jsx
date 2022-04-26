import React, { useCallback, useEffect, useState } from 'react'
import { ImageSwiper } from '../components/UIkit'
import { makeStyles } from '@material-ui/styles'
import { useDispatch, useSelector } from 'react-redux'
import { returnCodeToBr } from '../function/common'
import { getCoordinates } from '../reducks/coordinates/selectors'
import { DetailTable, Comment, Relationship } from '../components/Coordinates'
import { CommentWindow } from '../components/UIkit'

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
  const id = selector.coordinates.id
  const selectedCoordinate = getCoordinates(selector).filter((coordinate) => coordinate.id == id)
  const [coordinate, setCoordinate] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const ShowModal = () => {
    setShowModal(true)
  }

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
            <h2 className="u-text__headline">{coordinate.tpo}</h2>
            <p className={classes.price}>¥{coordinate.price.toLocaleString()}</p>
            <CommentWindow showFlag={showModal} setShowModal={setShowModal} />
            <div className="module-spacer--small" />
            <DetailTable
              season={coordinate.season}
              tpo={coordinate.tpo}
              rating={coordinate.rating}
              description={coordinate.description}
            />
            <div className="module-spacer--small" />
            <button onClick={ShowModal}>コメントする</button>
            <div className="module-spacer--small" />
            <Comment />
            <div className="module-spacer--small" />
            <Relationship />
            <div className="module-spacer--small" />
          </div>
        </div>
      )}
    </section>
  )
}

export default CoordinateDetail
