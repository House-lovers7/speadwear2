import React from 'react'
import Swiper from 'react-id-swiper'
import NoImage from '../../assets/img/src/no_image.png'
import 'swiper/css/swiper.css'

const ImageSwiper = (props) => {
  const [params] = React.useState({
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    spaceBetween: 30,
  })

  return (
    <Swiper {...params}>
      {props.image.length === 0 ? (
        <div className="p-media__thumb">
          <img src={NoImage} alt="No Image" />
        </div>
      ) : (
        <div className="p-media__thumb">
          <img src={props.image} alt="商品画像" />
        </div>
      )}
    </Swiper>
  )
}

export default ImageSwiper
