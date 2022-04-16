import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import Auth from './Auth'
import {
  SignUp,
  SignIn,
  Reset,
  ItemEdit,
  ItemList,
  ItemDetail,
  CoordinateDetail,
  CoordinateEdit,
  CoordinateList,
  Ransack,
} from './templates'
// import Auth from './Auth'

const Router = (props) => {
  return (
    <Switch>
      <Route exact path={'/signin'} component={SignIn} />
      <Route exact path={'/signup'} component={SignUp} />
      <Route exact path={'/signin/reset'} component={Reset} />
      {/* <Auth> */}
      <Route exact path={'/items/search/'} component={Ransack} />
      <Route exact path={'/users/:id/items/:itemId/edit'} component={ItemEdit} />
      <Route exact path={'/users/:id/items/:itemId'} component={ItemDetail} />
      <Route path={'/users/:id/items/'} component={ItemList} />
      <Route exact path={'/users/:id/coordinates/:coordinateId'} component={CoordinateDetail} />
      <Route exact path={'/users/:id/coordinates/:coordinateId/edit'} component={CoordinateEdit} />
      <Route path={'/users/:id/coordinates/'} component={CoordinateList} />
      {/* </Auth> */}
    </Switch>
  )
}

export default Router
