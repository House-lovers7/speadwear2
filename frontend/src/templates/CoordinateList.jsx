import React, { useEffect } from 'react'
import { CoordinateCard } from '../components/Coordinates'
import { useDispatch } from 'react-redux'
import { fetchCoordinates } from '../reducks/coordinates/operations'
import { getCoordinates } from '../reducks/coordinates/selectors'
import { useSelector } from 'react-redux'

const CoordinateList = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const coordinates = getCoordinates(selector)

  const query = selector.router.location.search
  // const gender = /^\?gender=/.test(query) ? query.split('?gender=')[1] : "";
  // const category = /^\?category=/.test(query) ? query.split('?category=')[1] : "";

  useEffect(() => {
    dispatch(fetchCoordinates())
  }, [query])

  return (
    <section className="c-section-wrapin">
      <div className="p-grid__row">
        {coordinates.length > 0 &&
          coordinates.map((coordinate) => (
            <CoordinateCard
              key={coordinate.id}
              id={coordinate.id}
              content={coordinate.content}
              price={coordinate.price}
              images={coordinate.images}
              season={coordinate.season}
              rating={coordinate.rating}
            />
          ))}
      </div>
    </section>
  )
}

export default CoordinateList
