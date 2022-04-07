import React, { useCallback, useEffect, useState } from 'react'
import { PrimaryButton, SelectBox, TextInput, ImageArea } from '../components/UIkit'
import { useDispatch, useSelector } from 'react-redux'
// import SetSizesArea from "../components/Products/SetSizesArea";
// import { saveCoordinate } from '../reducks/items/operations'
import { fetchAllCoordinates } from '../reducks/coordinates/operations'
import { Stack, Rating } from '@mui/material'

const CoordinateEdit = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const path = selector.router.location.pathname
  const userId = path.split('/users/')[1].split('/items/')[0]
  const id = path.split(`/users/${userId}/items/`)[1]

  const seasons = [
    { id: '0', name: '春' },
    { id: '1', name: '夏' },
    { id: '2', name: '秋' },
    { id: '3', name: '冬' },
  ]

  const tpos = [
    { id: '0', name: 'デート' },
    { id: '1', name: 'リラックス' },
    { id: '2', name: 'スポーツ' },
    { id: '3', name: 'おでかけ' },
    { id: '4', name: 'お仕事' },
  ]

  const genders = [
    { id: 'all', name: 'ユニセックス' },
    { id: 'male', name: 'メンズ' },
    { id: 'female', name: 'レディース' },
  ]

  const sizes = [
    { id: '0', name: 'S' },
    { id: '1', name: 'M' },
    { id: '2', name: 'L' },
  ]

  const ratings = [
    { id: '0', name: 1 },
    { id: '1', name: 2 },
    { id: '2', name: 3 },
    { id: '3', name: 4 },
    { id: '3', name: 5 },
  ]

  const [season, setSeason] = useState(''),
    [tpo, setTpo] = useState([]),
    [gender, setGender] = useState(''),
    [size, setSize] = useState([]),
    [price, setPrice] = useState(''),
    [description, setDescription] = useState(''),
    [image, setImage] = useState([]),
    [rating, setRating] = useState([])

  const handleChange = (event, newRating) => {
    setRating(newRating)
  }

  const inputDescription = useCallback(
    (event) => {
      setDescription(event.target.value)
    },
    [setDescription]
  )

  // const inputColor = useCallback(
  //   (event) => {
  //     setPrice(event.target.value)
  //   },
  //   [setColor]
  // )

  const inputPrice = useCallback(
    (event) => {
      setPrice(event.target.value)
    },
    [setPrice]
  )

  if (id !== '') {
    id = id.split('/')[1]
  }

  useEffect(() => {
    if (id !== '') {
      dispatch(fetchAllCoordinates(userId, coordinateId)).then((snapshot) => {
        const data = snapshot.data()
        setSeason(data.season)
        setTpo(data.tpo)
        setGender(data.gender)
        setSize(data.size)
        setPrice(data.price)
        setDescription(data.description)
        setImages(data.images)
        setRating(data.rating)
      })
    }
  }, [id])

  //     useEffect( () => {
  //       db.collection('categories')
  //       .orderBy('order', 'asc')
  //       .get()
  //       .then(snapshots => {
  //         const list = []
  //         snapshots.forEach( snapshot => {
  //           const data = snapshot.data()
  //           list.push({
  //             id: data.id,
  //             name: data.name
  //           })
  //         })
  //         setCategories(list)
  //       })
  //     },[]);
  return (
    <section>
      <h2 className="u-text__headline u-text-center">アイテムの登録・編集</h2>
      <div className="c-section-container">
        <ImageArea images={image} setImages={setImage} />
        <SelectBox label={'季節'} options={seasons} required={false} select={setSeason} value={season} />
        <SelectBox label={'TPO'} options={tpos} required={true} select={setTpo} value={tpo} />
        <TextInput
          fullWidth={true}
          label={'ちょっとひとこと'}
          multiline={true}
          required={false}
          onChange={inputDescription}
          value={description}
          type={'text'}
        />
        <div className="module-spacer--small" />
        <Stack spacing={2}>
          <Rating value={rating} onChange={handleChange} />
        </Stack>
        <div className="module-spacer--small" />
        <SelectBox label={'性別'} options={genders} required={true} select={setGender} value={gender} />
        <SelectBox label={'サイズ'} options={sizes} required={true} select={setSize} value={size} />
        <TextInput
          fullWidth={true}
          label={'値段つけるならいくら'}
          multiline={false}
          required={false}
          onChange={inputPrice}
          rows={1}
          value={price}
          type={'number'}
        />
        <div className="module-spacer--small" />
        <div className="center">
          <PrimaryButton
            label={'コーデを保存する'}
            onClick={() =>
              dispatch(saveIem(userId, season, tpo, gender, size, price, image, description, image, rating))
            }
          />
        </div>
      </div>
    </section>
  )
}

export default CoordinateEdit
