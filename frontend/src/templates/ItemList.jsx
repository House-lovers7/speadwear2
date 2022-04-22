import React, { useEffect } from 'react'
import { ItemCard } from '../components/Items'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleItem } from '../reducks/items/operations'
import { getItems } from '../reducks/items/selectors'

const ItemList = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const path = selector.router.location.pathname
  const items = getItems(selector)
  const userId = path.split('/users/')[1].split('/items/')[0]

  useEffect(() => {
    if (userId !== '') dispatch(fetchSingleItem(userId))
  }, [userId])

  return (
    <section className="c-section-wrapin">
      <div className="p-grid__row">
        {items.length > 0 &&
          items.map((item) => (
            <ItemCard
              item={item}
              key={item.id}
              id={item.id}
              content={item.content}
              price={item.price}
              image={item.image}
              season={item.season}
              rating={item.rating}
              userId={userId}
            />
          ))}
      </div>
    </section>
  )
}

export default ItemList
