import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {
  Home,
  Dashboard,
  SignUp,
  SignIn,
  SignOut,
  Reset,
  ItemEdit,
  ItemList,
  ItemDetail,
  CoordinateDetail,
  CoordinateEdit,
  // CoordinateList
} from './templates'
// import Auth from './Auth'

const Router = (props) => {
  console.log(props.loggedInStatus)
  return (
    <Switch>
      {/* <Route exact path={'/'} component={Home} loggedInStatus={props.loggedInStatus} />
      <Route exact path={'/dashboard'} component={Dashboard} loggedInStatus={props.loggedInStatus} /> */}
      <Route exact path={'/signup'} component={SignUp} />
      <Route exact path={'/signin'} component={SignIn} />
      <Route exact path={'/signout'} component={SignOut} />
      <Route exact path={'/signin/reset'} component={Reset} />
      {/* <Auth> */}
      {/* <Route exact path={'/users/'} component={UserList} />
        <Route exact path={'/users/:id'} component={UserDetail} />
        <Route exact path={'/users/:id/edit'} component={UserEdit} /> */}
      <Route path={'/users/:id/items(/)?'} component={ItemList} />
      {/* <Route exact path={'/users/:id/coordinates(/)?'} component={CoordinateList} /> */}
      <Route exact path={'/users/:id/items/:itemId'} component={ItemDetail} />
      <Route exact path={'/users/:id/coordinates/:coordinateId'} component={CoordinateDetail} />
      <Route exact path={'/users/:id/items/:itemId/edit'} component={ItemEdit} />
      <Route exact path={'/users/:id/coordinates/:coordinateId/edit'} component={CoordinateEdit} />
      {/* </Auth> */}
    </Switch>
  )
}

export default Router
