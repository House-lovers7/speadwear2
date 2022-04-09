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
  console.log(coordinates)

  // const query = selector.router.location.search
  // const gender = /^\?gender=/.test(query) ? query.split('?gender=')[1] : "";
  // const category = /^\?category=/.test(query) ? query.split('?category=')[1] : "";

  // useEffect(() => {
  //   if (userId !== '') dispatch(fetchSingleCoordinates(userId))
  // }, [userId])

  console.log(coordinates)
  console.log(dispatch(fetchSingleCoordinates(userId)))

  return (
    <section className="c-section-wrapin">
      <div className="p-grid__row">
        {coordinates.length > 0 &&
          coordinates.map((coordinate) => (
            <CoordinateCard
              key={coordinate.id}
              id={coordinate.id}
              price={coordinate.price}
              images={coordinate.images}
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
