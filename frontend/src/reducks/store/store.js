import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
// Import reducers
import { UsersReducer } from '../users/reducers'
import { CoordinatesReducer } from '../coordinates/reducers'
import { ItemsReducer } from '../items/reducers'

// createStoreの再定義 - historyを引数で受け、connected-react-routerの利用を抽象化
export default function createStore(history) {
  return reduxCreateStore(
    // オリジナル createStore の別名
    combineReducers({
      loading: LoadingReducer,
      coordinates: CoordinatesReducer,
      items: ItemsReducer,
      router: connectRouter(history),
      users: UsersReducer,
    }),
    applyMiddleware(routerMiddleware(history))
  )
}
