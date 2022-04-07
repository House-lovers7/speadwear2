import applyCaseMiddleware from 'axios-case-converter'
import axios from 'axios'

// ヘッダーに関してはケバブケースのままで良いので適用を無視するオプションを追加
const options = {
  ignoreHeaders: true,
}

const axiosConverter = applyCaseMiddleware(
  axios.create({
    baseURL: 'http://localhost:3001/api/v1',
    headers: {
      'Content-Type': 'multipart/form-data', // 画像ファイルを取り扱うのでform-dataで送信
    },
  }),
  options
)

export default axiosConverter
