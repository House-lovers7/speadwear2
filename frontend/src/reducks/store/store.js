import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
// Import reducers
import { UsersReducer } from '../users/reducers'
import { ItemsReducer } from '../items/reducers'
import { CoordinatesReducer } from '../coordinates/reducers'
import { ApisReducer } from '../api/reducers'

// createStoreの再定義 - historyを引数で受け、connected-react-routerの利用を抽象化
export default function createStore(history) {
  // Define individual settings of redux-logger
  let middleWares = [routerMiddleware(history), thunk]
  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({
      collapsed: true,
      diff: true,
    })
    middleWares.push(logger)
  }

  return reduxCreateStore(
    // オリジナル createStore の別名
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer,
      items: ItemsReducer,
      Coordinates: CoordinatesReducer,
      apis: ApisReducer,
    }),
    applyMiddleware(...middleWares)
  )
}
