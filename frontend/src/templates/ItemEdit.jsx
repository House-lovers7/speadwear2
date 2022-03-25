import React, { useCallback, useEffect, useState } from 'react'
import { PrimaryButton, SelectBox, TextInput, ImageArea } from '../components/UIkit'
// import SetSizesArea from "../components/Products/SetSizesArea";
// import { saveItem } from '../reducks/items/operations'
import { createItem } from '../reducks/api/operations'
import { useDispatch } from 'react-redux'
import { db } from '../firebase'
// import Rating from '@mui/material/Rating'
// import { StarIcon } from '@chakra-ui/icons'

const ItemEdit = () => {
  const dispatch = useDispatch()

  const genders = [
    { id: 'all', name: 'ユニセックス' },
    { id: 'male', name: 'メンズ' },
    { id: 'female', name: 'レディース' },
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
    { id: '16', name: 'そのほか' },
    // {id: "16", name: "お仕事"},
    // {id: "17", name: "お仕事"},
    // {id: "18", name: "お仕事"},
    // {id: "19", name: "お仕事"},
    // {id: "20", name: "お仕事"},
    // {id: "21", name: "デート"},
    // {id: "22", name: "リラックス"},
    // {id: "23", name: "スポーツ"},
  ]
  //定義名をcategoriesにしようか検討中
  const superItems = [
    { id: '0', name: 'アウター' },
    { id: '1', name: 'トップス' },
    { id: '2', name: 'ボトムス' },
    { id: '3', name: 'シューズ' },
  ]

  const seasons = [
    { id: '0', name: '春' },
    { id: '1', name: '夏' },
    { id: '2', name: '秋' },
    { id: '3', name: '冬' },
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
    // [color, setColor] = useState(''),
    [superItem, setSuperItem] = useState(''),
    [rating, setRating] = useState([]),
    [content, setContent] = useState(''),
    [category, setCategory] = useState(''),
    // [categories, setCategories] = useState([]),
    [size, setSize] = useState([]),
    [gender, setGender] = useState(''),
    [price, setPrice] = useState(''),
    [description, setDescription] = useState(''),
    [images, setImages] = useState([])

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
  //         setSuperItem(data.superItem)
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
      fetchItem(userId, itemId)
        .doc(id)
        .get()
        .then((snapshot) => {
          const data = snapshot.data()
          setSeason(data.season)
          setTpo(data.tpo)
          setSuperItem(data.superItem)
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
        <ImageArea images={images} setImages={setImages} />
        <SelectBox label={'季節'} options={seasons} required={false} select={setSeason} value={season} />
        <SelectBox label={'TPO'} options={tpos} required={true} select={setTpo} value={tpo} />
        <SelectBox label={'カテゴリー'} options={superItems} required={true} select={setSuperItem} value={superItem} />
        <SelectBox label={'服の種類'} options={contents} required={true} select={setContent} value={content} />
        <TextInput
          fullWidth={true}
          label={'ちょっとひとこと'}
          multiline={true}
          required={false}
          onChange={inputDescription}
          rows={5}
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
        {/* <SetSizesArea sizes={sizes} setSizes={setSizes} /> */}
        <div className="module-spacer--small" />
        <div className="center">
          <PrimaryButton
            label={'服を保存する'}
            onClick={() =>
              dispatch(
                saveIem(
                  id,
                  season,
                  tpo,
                  superItem,
                  content,
                  description,
                  // category,
                  rating,
                  // gender,
                  // size,
                  price,
                  images
                )
              )
            }
          />
        </div>
      </div>
    </section>
  )
}

export default ItemEdit
