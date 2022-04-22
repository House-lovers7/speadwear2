import React, { useCallback, useEffect, useState } from 'react'
import { PrimaryButton, TextInput } from '../UIkit'
import { getComments } from '../../reducks/comments/selectors'
import NoImage from '../../assets/img/src/no_image.png'

import { createItem, fetchAllItems } from '../../reducks/items/operations'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/styles'
import { SubwaySharp } from '@mui/icons-material'

const useStyles = makeStyles((theme) => ({
  baloon: {
    width: '100%',
    margin: '1.5rem 0',
    overflow: 'hidden',
  },
  faceIcon: {
    float: 'left',
    'margin-right': '-90',
    width: 80,
  },
  iconImage: {
    width: '100%',
    height: 'auto',
    border: 'solid 3px #d7ebfe',
    'border-radius': '50%',
  },
  chatting: {
    width: '100%',
  },
  says: {
    display: 'inline-block',
    position: 'relative',
    margin: '5 0 0 105',
    padding: '17 13',
    'border-radius': '12',
    background: '#d7ebfe',
  },
  says: {
    '&::after': {
      display: 'inline-block',
      position: 'absolute',
      top: 18,
      left: '-24',
      border: '12px solid transparent',
      'border-right': '12 solid #d7ebfe',
      content: '""',
    },
  },
  saysPtag: {
    margin: 0,
    padding: 0,
  },
}))

const Comment = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const path = selector.router.location.pathname
  const comments = getComments(selector)
  const userId = path.split('/users/')[1].split('/coordinates/')[0]
  const id = selector.coordinates.id
  const [comment, setComment] = useState('')
  const image = [NoImage]

  // const [superItem, setSuperItem] = useState(''),
  // [tpo, setTpo] = useState([]);

  // useEffect(() => {
  //   if (id !== '')
  //   setItem(selectedItem[0])
  // }, [])

  // useEffect (() => {
  //   setSeason(item.season)
  //   setTpo(item.tpo)
  //   setSuperItem(item.superItem)
  //   setContent(item.content)
  //   setDescription(item.description)
  //   // setCategory(data.category)
  //   setRating(item.rating)
  //   setGender(item.gender)
  //   setPrice(item.price)
  //   setSize(item.size)
  //   setImage(item.image)
  // }, [item])

  //定義名をcategoriesにしようか検討中

  const inputComment = useCallback(
    (event) => {
      setComment(event.target.value)
    },
    [setComment]
  )

  return (
    <section>
      <div className="classes.baloon">
        <div className="classes.faceIcon"></div>
        <div className="classes.chatting">
          <div class="says">
            <p>コメント欄</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Comment
