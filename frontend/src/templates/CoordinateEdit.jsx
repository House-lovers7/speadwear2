import React, { useCallback, useEffect, useState } from 'react'
import { PrimaryButton, SelectBox, TextInput, ImageArea } from '../components/UIkit'
// import SetSizesArea from "../components/Products/SetSizesArea";
// import { saveCoordinate } from '../reducks/items/operations'
import { createCoordinate } from '../reducks/api/operations'
import { useDispatch } from 'react-redux'
import { db } from '../firebase'
// import Rating from '@mui/material/Rating'
// import { StarIcon } from '@chakra-ui/icons'

const CoordinateEdit = () => {
  const dispatch = useDispatch()

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

  let id = window.location.pathname.split('/item/edit')[1]
  if (id !== '') {
    id = id.split('/')[1]
  }

  // useEffect(() => {
  //   if (id !== '') {
  //     db.collection('items')
  //       .doc(id)
  //       .get()
  //       .then((snapshot) => {
  //         const data = snapshot.data()
  //         setSeason(data.season)
  //         setTpo(data.tpo)
  //         setSuperCoordinate(data.superCoordinate)
  //         setContent(data.content)
  //         setDescription(data.description)
  //         // setCategory(data.category)
  //         setRating(data.rating)
  //         setGender(data.gender)
  //         setPrice(data.price)
  //         setSize(data.size)
  //         setImages(data.images)
  //       })
  //   }
  // }, [id])

  //fetchしてくる情報をlogで見てしらべる。
  useEffect(() => {
    if (id !== '') {
      db.collection('items')
      fetchCoordinate(userId, itemId)
        .doc(id)
        .get()
        .then((snapshot) => {
          const data = snapshot.data()
          setSeason(data.season)
          setTpo(data.tpo)
          setSuperCoordinate(data.superCoordinate)
          setContent(data.content)
          setDescription(data.description)
          // setCategory(data.category)
          setRating(data.rating)
          setGender(data.gender)
          setPrice(data.price)
          setSize(data.size)
          setImages(data.images)
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
        <SelectBox label={'評価'} options={ratings} required={true} select={setRating} value={rating} />
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
              dispatch(
                saveIem(
                  id,
                  uid,
                  itemId,
                  commentId,
                  likeCoordinateId,
                  season,
                  tpo,
                  gender,
                  size,
                  price,
                  description,
                  image,
                  rating,
                  siShoes,
                  siBottoms,
                  siTops,
                  siOuter
                )
              )
            }
          />
        </div>
      </div>
    </section>
  )
}

export default CoordinateEdit
