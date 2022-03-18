export const saveItem = (id, name, description, category, gender, price, images, sizes) => {
  return async (dispatch) => {
    const timestamp = FirebaseTimestamp.now()

    const data = {
      category: category,
      description: description,
      gender: gender,
      images: images,
      name: name,
      //文字列の数値を10進数に変える
      price: parseInt(price, 10),
      sizes: sizes,
      updated_at: timestamp,
    }

    if (id === '') {
      const ref = itemsRef.doc()
      id = ref.id
      data.id = id
      data.created_at = timestamp
    }
    //Firestoreにデータ保存
    return itemsRef
      .doc(id)
      .set(data, { merge: true })
      .then(() => {
        dispatch(push('/'))
      })
      .catch((error) => {
        throw new Error(error)
      })
  }
}
