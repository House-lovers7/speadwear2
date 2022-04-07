import React, { useCallback, useEffect, useState } from 'react'
import { PrimaryButton, TextInput } from '../UIkit'
import { getComments } from '../../reducks/comments/selectors'

import { createItem, fetchAllItems } from '../../reducks/items/operations'
import { useDispatch, useSelector } from 'react-redux'

const Comment = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const path = selector.router.location.pathname
  const comments = getComments(selector)
  const userId = path.split('/users/')[1].split('/items/')[0]
  const id = path.split(`/users/${userId}/items/`)[1].split('/edit')[0]
  const [comment, setComment] = useState('')

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
      <TextInput
        fullWidth={true}
        label={'ちょっとひとこと'}
        multiline={true}
        required={false}
        onChange={inputComment}
        value={comment}
        type={'text'}
      />
      <div className="module-spacer--small" />
      <div className="center">
        <PrimaryButton label={'コメントする'} onClick={() => dispatch(createComment(id, userId, comment))} />
      </div>
    </section>
  )
}

export default Comment
