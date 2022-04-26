import React, { useCallback, useEffect, useState } from 'react'
import { PrimaryButton, SelectBox, TextInput, ImageArea } from '../components/UIkit'
import { useDispatch, useSelector } from 'react-redux'
import { Stack, Rating } from '@mui/material'
import { getCoordinates } from '../reducks/coordinates/selectors'

const CoordinateEdit = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const path = selector.router.location.pathname
  const userId = path.split('/users/')[1].split('/coordinates/')[0]
  const id = path.split(`/users/${userId}/coordinates/`)[1].split('/edit')[0]
  const selectedCoordinate = getCoordinates(selector).filter((coordinate) => coordinate.id == id)

  const seasons = [
    { id: '春', name: '春' },
    { id: '夏', name: '夏' },
    { id: '秋', name: '秋' },
    { id: '冬', name: '冬' },
  ]

  const tpos = [
    { id: 'デート', name: 'デート' },
    { id: 'リラックス', name: 'リラックス' },
    { id: 'スポーツ', name: 'スポーツ' },
    { id: 'おでかけ', name: 'おでかけ' },
    { id: 'お仕事', name: 'お仕事' },
  ]

  const genders = [
    { id: 'ユニセックス', name: 'ユニセックス' },
    { id: 'メンズ', name: 'メンズ' },
    { id: 'レディース', name: 'レディース' },
  ]

  const sizes = [
    { id: 'S', name: 'S' },
    { id: 'M', name: 'M' },
    { id: 'L', name: 'L' },
  ]

  const ratings = [
    { id: '0', name: 1 },
    { id: '1', name: 2 },
    { id: '2', name: 3 },
    { id: '3', name: 4 },
    { id: '3', name: 5 },
  ]

  const [coordinate, setCoordinate] = useState('')

  const [season, setSeason] = useState(''),
    [tpo, setTpo] = useState([]),
    [gender, setGender] = useState(''),
    [size, setSize] = useState([]),
    [price, setPrice] = useState(''),
    [description, setDescription] = useState(''),
    [image, setImage] = useState({}),
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

  useEffect(() => {
    if (id !== '') setCoordinate(selectedCoordinate[0])
  }, [])

  useEffect(() => {
    setSeason(coordinate.season)
    setTpo(coordinate.tpo)
    setDescription(coordinate.description)
    setRating(coordinate.rating)
    setPrice(coordinate.price)
    setImage(coordinate.image)
    setGender(coordinate.gender)
    setSize(coordinate.size)
  }, [coordinate])

  return (
    <section>
      <h2 className="u-text__headline u-text-center">コーデの登録・編集</h2>
      <div className="c-section-container">
        <ImageArea images={image} setImages={setImage} />
        <SelectBox label={`季節: ${season}`} options={seasons} required={true} select={setSeason} value={season} />
        <SelectBox label={`TPO: ${tpo}`} options={tpos} required={true} select={setTpo} value={tpo} />
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
        <SelectBox label={`性別: ${gender}`} options={genders} required={true} select={setGender} value={gender} />
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
