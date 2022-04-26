import React, { useCallback, useEffect, useState } from 'react'
import { ImageSwiper, PrimaryButton, SelectBox, TextInput } from '../components/UIkit'
import { getItems } from '../reducks/items/selectors'
import { makeStyles } from '@material-ui/styles'
import { useDispatch, useSelector } from 'react-redux'
import { returnCodeToBr } from '../function/common'
import { DetailTable, Comment, Relationship } from '../components/Items'
import { CommentWindow } from '../components/UIkit'
import { createItemComment } from '../reducks/comments/operations'

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
  const id = selector.items.id
  const path = selector.router.location.pathname
  const userId = path.split('/users/')[1].split('/items/')[0]
  const [comment, setComment] = useState('コメント')
  const selectedItem = getItems(selector).filter((item) => item.id == id)
  const [showModal, setShowModal] = useState(false)
  const [item, setItem] = useState(null)
  const ShowModal = () => {
    setShowModal(true)
  }

  console.log(selector)
  console.log(selectedItem)

  useEffect(() => {
    if (id !== '') setItem(selectedItem[0])
  }, [id])

  return (
    <section className="c-section-wrapin">
      {item && (
        <div className="p-grid__row">
          <div className={classes.sliderBox}>
            {/* <ImageSwiper image={window.location.origin + item.image} /> */}
            <ImageSwiper image={'https://speadwear2.s3.ap-northeast-1.amazonaws.com/' + item.image} />
          </div>
          <div className={classes.detail}>
            <h2 className="u-text__headline">{item.content}</h2>
            <p className={classes.price}>¥{item.price.toLocaleString()}</p>
            <CommentWindow showFlag={showModal} setShowModal={setShowModal} />
            <div className="module-spacer--small" />
            <DetailTable season={item.season} tpo={item.tpo} rating={item.rating} description={item.description} />
            <div className="module-spacer--small" />
            <button onClick={ShowModal}>もーだる表示</button>
            <div className="module-spacer--small" />
            <button onClick={() => dispatch(createItemComment(id, userId, comment))}>コメントする</button>
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

export default ItemDetail
