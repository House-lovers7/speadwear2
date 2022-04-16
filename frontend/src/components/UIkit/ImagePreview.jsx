import React from 'react'

const ImagePreview = (props) => {
  console.log(props.id)
  return (
    <div
      className="p-media__thumb"
      onClick={() => {
        props.delete(props.id)
      }}
    >
      <img alt="プレビュー画像" src={props.path ? props.path.data : null} />
    </div>
  )
}
export default ImagePreview
