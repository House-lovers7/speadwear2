import React, { useEffect } from 'react'
import { CoordinateCard } from '../components/Coordinates'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleCoordinates } from '../reducks/coordinates/operations'
import { getCoordinates } from '../reducks/coordinates/selectors'

const CoordinateList = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const path = selector.router.location.pathname
  const coordinates = getCoordinates(selector)
  const userId = path.split('/users/')[1].split('/coordinates/')[0]

  useEffect(() => {
    if (userId !== '') dispatch(fetchSingleCoordinates(userId))
  }, [userId])

  return (
    <section className="c-section-wrapin">
      <div className="p-grid__row">
        {coordinates.length > 0 &&
          coordinates.map((coordinate) => (
            <CoordinateCard
              coordinate={coordinate}
              key={coordinate.id}
              id={coordinate.id}
              price={coordinate.price}
              image={coordinate.image}
              season={coordinate.season}
              rating={coordinate.rating}
              userId={userId}
            />
          ))}
      </div>
    </section>
  )
}

export default CoordinateList
