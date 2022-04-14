import React, { useCallback } from 'react'
import { storage } from '../../firebase/index'
import { makeStyles } from '@material-ui/styles'
import { IconButton } from '@material-ui/core'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate'
import ImagePreview from './ImagePreview'
import { isConditionalExpression } from 'typescript'
import NoImage from '../../assets/img/src/no_image.png'
import { signUpAction } from './actions'
import axios from 'axios'

import * as APIS from '../api/actions'
import * as URLS from '../../urls'

const useStyles = makeStyles({
  icon: {
    height: 48,
    width: 48,
  },
})

const ImageArea = (props) => {
  const classes = useStyles()
  console.log(props.image)
  // 暫定対応

  const deleteImage = useCallback(
    async (id) => {
      const ret = window.confirm('この画像を削除しますか？')
      if (!ret) {
        return false
      } else {
        const newImages = props.images.filter((image) => image.id !== id)
        props.setImages(newImages)
        return storage.ref('images').child(id).delete()
      }
    },
    [props.image]
  )

  const uploadImage = useCallback(
    (event) => {
      const file = event.target.files
      let blob = new Blob(file, { type: 'image/jpeg' })
      // Generate random 16 digits strings
      const S = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
      const N = 16
      const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N)))
        .map((n) => S[n % S.length])
        .join('')

      const uploadRef = storage.ref('images').child(fileName)
      const uploadTask = uploadRef.put(blob)

      uploadTask.then(() => {
        // Handle successful uploads on complete
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          const newImage = { id: fileName, path: downloadURL }
          props.setImages((prevState) => [...prevState, newImage])
        })
      })
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
              <label htmlFor="avatar">画像</label>
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
