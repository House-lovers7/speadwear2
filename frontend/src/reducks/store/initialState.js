import { formatDiagnosticsWithColorAndContext, isForStatement } from 'typescript'

export const initialState = {
  items: {
    list: {},
    id: '',
    userId: '',
    coordinateId: '',
    superItem: '',
    season: '',
    tpo: '',
    color: '',
    content: '',
    gender: '',
    size: '',
    price: '',
    description: '',
    image: [],
    rating: '',
  },
  coordinates: {
    list: {},
    id: '',
    userId: '',
    itemId: '',
    commentId: '',
    likeCoordinateId: '',
    season: '',
    tpo: '',
    gender: '',
    size: '',
    price: '',
    image: [],
    rating: '',
    siShoes: '',
    siBotttoms: '',
    siTops: '',
    siOuter: '',
    description: '',
  },
  users: {
    list: {},
    id: '',
    isSignedIn: false,
    name: '',
    email: '',
    image: '',
    gender: '',
    admin: false,
  },
  apis: {
    loading: '',
    error: '',
  },
  likeCoordinates: {
    list: {},
  },
  comments: {
    list: {},
  },
  blocks: {
    list: {},
  },
  relationships: {
    list: {},
  },
}
