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
} from './templates'
import Auth from './Auth'

const Router = (props) => {
  console.log(props.loggedInStatus)
  return (
    <Switch>
      <Route exact path={'/'} component={Home} loggedInStatus={props.loggedInStatus} />
      <Route exact path={'/dashboard'} component={Dashboard} loggedInStatus={props.loggedInStatus} />
      <Route exact path={'/signup'} component={SignUp} />
      <Route exact path={'/signin'} component={SignIn} />
      <Route exact path={'/signout'} component={SignOut} />
      <Route exact path={'/signin/reset'} component={Reset} />
      <Auth>
        <Route exact path={'(/)?'} component={ItemList} />
        <Route
          path="/users"
          render={({ match: { url } }) => (
            <Switch>
              <Route exact path={url}>
                <Page1 />
              </Route>
              <Route path={`${url}/detailA`}>
                <DetailA />
              </Route>
              <Route path={`${url}/detailB`}>
                <DetailB />
              </Route>
            </Switch>
          )}
        />
        <Route exact path={'/item/:id'} component={ItemDetail} />
        <Route path={'/item/edit(/:id)?'} component={ItemEdit} />
        <Route exact path={'/coordinate/:id'} component={CoordinateDetail} />
        <Route path={'/coordinate/edit(/:id)?'} component={CoordinateEdit} />
      </Auth>
    </Switch>
  )
}

export default Router
