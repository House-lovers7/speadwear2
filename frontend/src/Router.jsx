import React from 'react'
import { Route, Switch } from 'react-router'
import {
  SignUp,
  SignIn,
  SignOut,
  Reset,
  ItemEdit,
  ItemList,
  ItemDetail,
  CoordinateDetail,
  CoordinateEdit,
} from './templates'
import Auth from './Auth'

const Router = () => {
  return (
    <Switch>
      <Route exact path={'/signup'} component={SignUp} />
      <Route exact path={'/signin'} component={SignIn} />
      <Route exact path={'/signout'} component={SignOut} />
      <Route exact path={'/signin/reset'} component={Reset} />
      <Auth>
        <Route exact path={'(/)?'} component={ItemList} />
        <Route exact path={'/item/:id'} component={ItemDetail} />
        <Route path={'/item/edit(/:id)?'} component={ItemEdit} />
        <Route exact path={'/coordinate/:id'} component={CoordinateDetail} />
        <Route path={'/coordinate/edit(/:id)?'} component={CoordinateEdit} />
      </Auth>
    </Switch>
  )
}

export default Router
