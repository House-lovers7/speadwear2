import React, { useCallback, useEffect, useState } from 'react'
import { PrimaryButton, SelectBox, TextInput, ImageArea } from '../components/UIkit'
import { getItems } from '../reducks/items/selectors'
import { searchItem } from '../reducks/items/operations'
import { useDispatch, useSelector } from 'react-redux'
import { Stack, Rating } from '@mui/material'

const Ransack = () => {
  const dispatch = useDispatch()

  const [superItem, setSuperItem] = useState(null),
    [season, setSeason] = useState(null),
    [tpo, setTpo] = useState(null),
    // [color, setColor] = useState(''),
    // [content, setContent] = useState(''),
    // [gender, setGender] = useState(''),
    // [size, setSize] = useState([]),
    [rating, setRating] = useState(null)

  // useEffect(() => {
  //   if (id !== '') setItem(selectedItem[0])
  // }, [])

  // useEffect(() => {
  //   setSeason(item.season)
  //   setTpo(item.tpo)
  //   setSuperItem(item.superItem)
  //   setContent(item.content)
  //   setDescription(item.description)
  //   // setCategory(data.category)
  //   setRating(item.rating)
  //   setGender(item.gender)
  //   setPrice(item.price)
  //   setSize(item.size)
  //   setImage(item.image)
  // }, [item])

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

  // //color

  // const contents = [
  //   { id: 'Tシャツ', name: 'Tシャツ' },
  //   { id: 'Yシャツ', name: 'Yシャツ' },
  //   { id: 'ポロシャツ', name: 'ポロシャツ' },
  //   { id: 'パーカー', name: 'パーカー' },
  //   { id: 'スウェット', name: 'スウェット' },
  //   { id: 'セーター', name: 'セーター' },
  //   { id: 'パンツ', name: 'パンツ' },
  //   { id: 'デニムパンツ', name: 'デニムパンツ' },
  //   { id: 'ジャケット', name: 'ジャケット' },
  //   { id: 'コート', name: 'コート' },
  //   { id: 'スニーカー', name: 'スニーカー' },
  //   { id: 'ローファー', name: 'ローファー' },
  //   { id: 'レザーシューズ', name: 'レザーシューズ' },
  //   { id: 'ブーツ', name: 'ブーツ' },
  //   { id: 'ビジネス', name: 'ビジネス' },
  //   { id: 'そのほか', name: 'そのほか' },
  //   { id: 'お仕事', name: 'お仕事' },
  //   // {id: "23", name: "スポーツ"},
  // ]

  // const genders = [
  //   { id: 'ユニセックス', name: 'ユニセックス' },
  //   { id: 'メンズ', name: 'メンズ' },
  //   { id: 'レディース', name: 'レディース' },
  // ]

  // const sizes = [
  //   { id: 'S', name: 'S' },
  //   { id: 'M', name: 'M' },
  //   { id: 'L', name: 'L' },
  // ]

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

  return (
    <section>
      <h2 className="u-text__headline u-text-center">どんな条件でさがす</h2>
      <div className="c-section-container">
        <SelectBox label={`シーズン: ${season}`} options={seasons} required={false} select={setSeason} value={season} />
        <SelectBox label={`TPO: ${tpo}`} options={tpos} required={true} select={setTpo} value={tpo} />
        <SelectBox
          label={`カテゴリー: ${superItem}`}
          options={superItems}
          required={true}
          select={setSuperItem}
          value={superItem}
        />
        {/* <SelectBox
          label={`服の種類: ${content}`}
          options={contents}
          required={true}
          select={setContent}
          value={content}
        /> */}
        <div className="module-spacer--small" />
        <Stack spacing={2}>
          <Rating value={rating} onChange={handleChange} />
        </Stack>
        <div className="module-spacer--small" />
        {/* <SelectBox label={`性別: ${gender}`} options={genders} required={true} select={setGender} value={gender} />
        <SelectBox label={`サイズ: ${size}`} options={sizes} required={true} select={setSize} value={size} /> */}

        <div className="module-spacer--small" />

        <div className="module-spacer--small" />
        <div className="center">
          <PrimaryButton
            label={'服を検索する'}
            onClick={() =>
              dispatch(
                searchItem(
                  superItem,
                  season,
                  tpo,
                  // color,
                  // content,
                  // gender,
                  // size,
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

export default Ransack
