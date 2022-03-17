import React, { useCallback, useEffect, useState } from 'react'
import { PrimaryButton, SelectBox, TextInput } from '../components/UIkit'
// import SetSizesArea from "../components/Products/SetSizesArea";
import { saveItem } from '../reducks/items/operations'
import ImageArea from '../components/Items/ImageArea'
import { useDispatch } from 'react-redux'
// import { db } from "../firebase";
import Rating from '@mui/material/Rating'
import { StarIcon } from '@chakra-ui/icons'

const ItemEdit = () => {
  const dispatch = useDispatch()
  let id = window.location.pathname.split('/item/edit')[1]
  if (id !== '') {
    id = id.split('/')[1]
  }

  const genders = [
    { id: 'all', name: 'すべて' },
    { id: 'male', name: '男性' },
    { id: 'female', name: '女性' },
  ]

  const tpos = [
    { id: '0', name: 'デート' },
    { id: '1', name: 'リラックス' },
    { id: '2', name: 'スポーツ' },
    { id: '3', name: 'おでかけ' },
    { id: '4', name: 'お仕事' },
  ]

  const contents = [
    { id: '0', name: 'Tシャツ' },
    { id: '1', name: 'Yシャツ' },
    { id: '2', name: 'ポロシャツ' },
    { id: '3', name: 'パーカー' },
    { id: '4', name: 'スウェット' },
    { id: '4', name: 'セーター' },
    { id: '5', name: 'パンツ' },
    { id: '6', name: 'デニムパンツ' },
    { id: '7', name: 'ジャケット' },
    { id: '8', name: 'コート' },
    { id: '9', name: 'スニーカー' },
    { id: '10', name: 'ローファー' },
    { id: '11', name: 'レザーシューズ' },
    { id: '12', name: 'ブーツ' },
    { id: '13', name: 'ビジネス' },
    { id: '14', name: 'そのほか' },
    { id: '15', name: 'お仕事' },
    // {id: "16", name: "お仕事"},
    // {id: "17", name: "お仕事"},
    // {id: "18", name: "お仕事"},
    // {id: "19", name: "お仕事"},
    // {id: "20", name: "お仕事"},
    // {id: "21", name: "デート"},
    // {id: "22", name: "リラックス"},
    // {id: "23", name: "スポーツ"},
  ]

  // const categories = [
  //   {id: "0", name: "アウター"},
  //   {id: "1", name: "トップス"},
  //   {id: "2", name: "ボトムス"},
  //   {id: "3", name: "シューズ"},
  // ];

  const seasons = [
    { id: '0', name: '春' },
    { id: '1', name: '夏' },
    { id: '2', name: '秋' },
    { id: '3', name: '冬' },
  ]

  const ratings = [
    { id: '0', name: 1 },
    { id: '1', name: 2 },
    { id: '2', name: 3 },
    { id: '3', name: 4 },
    { id: '3', name: 5 },
  ]

  const [name, setName] = useState(''),
    [season, setSeason] = useState(''),
    [tpo, setTpo] = useState([]),
    [color, setColor] = useState(''),
    [rating, setRating] = useState([]),
    [content, setContent] = useState(''),
    [category, setCategory] = useState(''),
    [categories, setCategories] = useState([]),
    [gender, setGender] = useState(''),
    [description, setDescription] = useState(''),
    [images, setImages] = useState([])

  const inputSeason = useCallback(
    (event) => {
      setName(event.target.value)
    },
    [setSeason]
  )

  const inputDescription = useCallback(
    (event) => {
      setDescription(event.target.value)
    },
    [setDescription]
  )

  const inputTpo = useCallback(
    (event) => {
      setPrice(event.target.value)
    },
    [setTpo]
  )

  const inputColor = useCallback(
    (event) => {
      setPrice(event.target.value)
    },
    [setColor]
  )

  const inputRating = useCallback(
    (event) => {
      setPrice(event.target.value)
    },
    [setRating]
  )

  const inputContent = useCallback(
    (event) => {
      setPrice(event.target.value)
    },
    [setContent]
  )

  const inputCategory = useCallback(
    (event) => {
      setPrice(event.target.value)
    },
    [setCategory]
  )

  // useEffect( () => {
  //   if (id !== "") {
  //     db.collection('items').doc(id).get()
  //     .then( snapshot => {
  //       const data = snapshot.data()
  //       setImages(data.images)
  //       setName(data.name)
  //       setDescription(data.description)
  //       setCategory(data.category)
  //       setGender(data.gender)
  //       setPrice(data.price)
  //       setSizes(data.sizes)
  //       })
  //     }
  //     },[id])

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
        <ImageArea images={images} setImages={setImages} />
        <SelectBox label={'季節'} options={seasons} required={true} select={setSeason} value={season} />
        <SelectBox label={'TPO'} options={tpos} required={true} select={setTpo} value={tpo} />
        <SelectBox label={'服の種類'} options={contents} required={true} select={setTpo} value={tpo} />
        <TextInput
          fullWidth={true}
          label={'ちょっとひとこと'}
          multiline={true}
          required={true}
          onChange={inputDescription}
          rows={5}
          value={description}
          type={'text'}
        />
        <SelectBox label={'カテゴリー'} options={categories} required={true} select={setCategory} value={category} />
        <SelectBox label={'評価'} options={ratings} required={true} select={setRating} value={rating} />
        <SelectBox label={'性別'} options={genders} required={true} select={setGender} value={gender} />

        <div className="module-spacer--small" />
        {/* <SetSizesArea sizes={sizes} setSizes={setSizes} /> */}
        <div className="module-spacer--small" />
        <div className="center">
          <PrimaryButton
            label={'服を保存する'}
            onClick={() => dispatch(saveItem(id, name, description, category, gender, price, images, sizes))}
          />
        </div>
      </div>
    </section>
  )
}

export default ItemEdit
