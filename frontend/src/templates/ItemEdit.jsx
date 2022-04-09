import React, { useCallback, useEffect, useState } from 'react'
import { PrimaryButton, SelectBox, TextInput, ImageArea } from '../components/UIkit'
import { getItems } from '../reducks/items/selectors'
// import SetSizesArea from "../components/Products/SetSizesArea";
// import { saveItem } from '../reducks/items/operations'
import { createItem, fetchAllItems } from '../reducks/items/operations'
import { useDispatch, useSelector } from 'react-redux'
import Typography from '@mui/material/Typography'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material'
import { Box } from '@material-ui/core'
import { Stack, Rating } from '@mui/material'

const ItemEdit = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const path = selector.router.location.pathname
  const userId = path.split('/users/')[1].split('/items/')[0]
  const id = path.split(`/users/${userId}/items/`)[1].split('/edit')[0]
  const selectedItem = getItems(selector).filter((item) => item.id == id)

  const [item, setItem] = useState('')

  const [superItem, setSuperItem] = useState(''),
    [season, setSeason] = useState(''),
    [tpo, setTpo] = useState([]),
    [color, setColor] = useState(''),
    [content, setContent] = useState(''),
    [gender, setGender] = useState(''),
    [size, setSize] = useState([]),
    [price, setPrice] = useState(''),
    [description, setDescription] = useState(''),
    [image, setImage] = useState([]),
    [rating, setRating] = useState([])
  // [categories, setCategories] = useState([]),
  console.log(superItem)
  console.log(selectedItem)

  useEffect(() => {
    if (id !== '') setItem(selectedItem[0])
  }, [])

  useEffect(() => {
    setSeason(item.season)
    setTpo(item.tpo)
    setSuperItem(item.superItem)
    setContent(item.content)
    setDescription(item.description)
    // setCategory(data.category)
    setRating(item.rating)
    setGender(item.gender)
    setPrice(item.price)
    setSize(item.size)
    setImage(item.image)
  }, [item])

  //定義名をcategoriesにしようか検討中
  const superItems = [
    { id: 'アウター', name: 'アウター' },
    { id: 'トップス', name: 'トップス' },
    { id: 'ボトムス', name: 'ボトムス' },
    { id: 'シューズ', name: 'シューズ' },
  ]

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

  //color

  const contents = [
    { id: 'Tシャツ', name: 'Tシャツ' },
    { id: 'Yシャツ', name: 'Yシャツ' },
    { id: 'ポロシャツ', name: 'ポロシャツ' },
    { id: 'パーカー', name: 'パーカー' },
    { id: 'スウェット', name: 'スウェット' },
    { id: 'セーター', name: 'セーター' },
    { id: 'パンツ', name: 'パンツ' },
    { id: 'デニムパンツ', name: 'デニムパンツ' },
    { id: 'ジャケット', name: 'ジャケット' },
    { id: 'コート', name: 'コート' },
    { id: 'スニーカー', name: 'スニーカー' },
    { id: 'ローファー', name: 'ローファー' },
    { id: 'レザーシューズ', name: 'レザーシューズ' },
    { id: 'ブーツ', name: 'ブーツ' },
    { id: 'ビジネス', name: 'ビジネス' },
    { id: 'そのほか', name: 'そのほか' },
    { id: 'お仕事', name: 'お仕事' },
    // {id: "23", name: "スポーツ"},
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
    { id: '1', name: 1 },
    { id: '2', name: 2 },
    { id: '3', name: 3 },
    { id: '4', name: 4 },
    { id: '5', name: 5 },
  ]

  const handleChange = (event, newRating) => {
    setRating(newRating)
  }

  const inputTpo = useCallback(
    (event) => {
      setTpo(event.target.value)
    },
    [setTpo]
  )

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
        <ImageArea image={image} setImage={setImage} />
        <SelectBox label={`季節: ${season}`} options={seasons} required={false} select={setSeason} value={season} />
        <SelectBox label={`TPO: ${tpo}`} options={tpos} required={true} select={setTpo} value={tpo} />
        <SelectBox
          label={`カテゴリー: ${superItem}`}
          options={superItems}
          required={true}
          select={setSuperItem}
          value={superItem}
        />
        <SelectBox
          label={`服の種類: ${content}`}
          options={contents}
          required={true}
          select={setContent}
          value={content}
        />
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
        <SelectBox label={`サイズ: ${size}`} options={sizes} required={true} select={setSize} value={size} />
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
                createItem(
                  // id,
                  userId,
                  superItem,
                  season,
                  tpo,
                  color,
                  content,
                  gender,
                  size,
                  price,
                  description,
                  image,
                  rating
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
