import React, { useEffect } from 'react'
import { ItemCard } from '../components/Items'
import { useDispatch } from 'react-redux'
import { fetchItems } from '../reducks/items/operations'
import { getItems } from '../reducks/items/selectors'
import { useSelector } from 'react-redux'

const ItemList = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const items = getItems(selector)

  const query = selector.router.location.search
  // const gender = /^\?gender=/.test(query) ? query.split('?gender=')[1] : "";
  // const category = /^\?category=/.test(query) ? query.split('?category=')[1] : "";

  useEffect(() => {
    dispatch(fetchItems())
  }, [query])

  return (
    <section className="c-section-wrapin">
      <div className="p-grid__row">
        {items.length > 0 &&
          items.map((item) => (
            <ItemCard
              key={item.id}
              id={item.id}
              content={item.content}
              price={item.price}
              image={item.image}
              season={item.season}
              rating={item.rating}
            />
          ))}
      </div>
    </section>
  )
}

export default ItemList
