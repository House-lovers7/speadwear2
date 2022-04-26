import React, { useCallback, useEffect, useState } from 'react'
import { PrimaryButton, TextInput } from '../UIkit'
import { useDispatch, useSelector } from 'react-redux'

const Relationship = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const path = selector.router.location.pathname
  const followerId = 1
  const followedId = path.split('/users/')[1].split('/items/')[0]

  return (
    <section>
      <div className="module-spacer--small" />
      <div className="center">
        <PrimaryButton
          label={'アンフォローする'}
          onClick={() => dispatch(createRelationship(followerId, followedId))}
        />
      </div>
    </section>
  )
}

export default Relationship
