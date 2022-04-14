import React, { useCallback } from 'react'
import { makeStyles } from '@material-ui/styles'
import { IconButton } from '@material-ui/core'
import ImagePreview from './ImagePreview'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate'

const useStyles = makeStyles({
  icon: {
    height: 48,
    width: 48,
  },
})

const ImageArea = (props) => {
  const classes = useStyles()
  console.log(props.image)

  const deleteImage = useCallback(
    async (id) => {
      const ret = window.confirm('この画像を削除しますか？')
      if (!ret) {
        return false
      } else {
        const newImage = props.image.filter((image) => image.id !== id)
        props.setImage(newImage)
        return storage.ref('image').child(id).delete()
      }
    },
    [props.image]
  )

  const handleImageSelect = useCallback(
    (e) => {
      const reader = new FileReader()
      const files = e.target.files
      if (files) {
        reader.onload = () => {
          props.setImage({
            data: reader.result,
            name: files[0] ? files[0].name : 'unknownfile',
          })
        }
        reader.readAsDataURL(files[0])
      }
    },
    [props.setImage]
  )

  return (
    <div>
      <div className="p-grid__list-images">
        {props.image !== null && <ImagePreview delete={deleteImage} path={props.image} />}
      </div>
      <div className="u-text-right">
        <span>
          イメージの登録
          <IconButton className={classes.icon}>
            <label>
              <AddPhotoAlternateIcon />
              {/* アイコンクリック時の設定 */}
              <input
                className="u-display-none"
                type="file"
                name="image"
                id="image"
                accept="image/*,.png,.jpg,.jpeg,.gif"
                onChange={handleImageSelect}
              />
            </label>
          </IconButton>
        </span>
      </div>
    </div>
  )
}

export default ImageArea
