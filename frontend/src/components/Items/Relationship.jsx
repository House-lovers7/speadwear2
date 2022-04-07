import React, { useCallback, useEffect, useState } from 'react'
import { PrimaryButton, TextInput } from '../UIkit'
import { getRelationships } from '../../reducks/relationships/selectors'

import { createItem, fetchAllItems } from '../../reducks/items/operations'
import { useDispatch, useSelector } from 'react-redux'

const Relationship = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const path = selector.router.location.pathname
  const userId = path.split('/users/')[1].split('/items/')[0]
  const id = path.split(`/users/${userId}/items/`)[1].split('/edit')[0]
  const relationships = getRelationships(selector)
  const [follower, setFollower] = useState('')
  const [followed, setFollowed] = useState('')

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

  return (
    <section>
      <div className="module-spacer--small" />
      <div className="center">
        <PrimaryButton label={'フォローする'} onClick={() => dispatch(createfollow(id, userId))} />
      </div>
      <div className="module-spacer--small" />
      <div className="center">
        <PrimaryButton label={'アンフォローする'} onClick={() => dispatch(createComment(id, userId))} />
      </div>
    </section>
  )
}

export default Relationship
