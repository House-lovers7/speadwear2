import React from 'react'
import { Route, Switch } from 'react-router'
import { Home, SignUp, SignIn, SignOut, Reset, ItemEdit } from './templates'
import Auth from './Auth'

const Router = () => {
  return (
    <Switch>
      <Route exact path={'/signup'} component={SignUp} />
      <Route exact path={'/signin'} component={SignIn} />
      <Route exact path={'/signout'} component={SignOut} />
      <Route exact path={'/signin/reset'} component={Reset} />
      <Auth>
        <Route exact path={'(/)?'} component={Home} />
        <Route exact path={'/item/edit'} component={ItemEdit} />
      </Auth>
    </Switch>
  )
}

export default Router
