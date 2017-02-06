/* eslint-disable */
import React from 'react'
import { responsiveStateReducer, responsiveStoreEnhancer } from 'redux-responsive'
import { Render, Router, Route, IndexRoute, CombineState, CreateStore } from 'jumpsuit'
// Styles
import './index.css'
// State
import states from './state'
// Containers
import App from './containers/App'
// Screens
import Home from './screens/Home'
import Counter from './screens/Counter'


/*
const reducer = CombineState(Object.assign(states, {
  browser: responsiveStateReducer
}))

const store = CreateStore(reducer, undefined, {
  //enhancers: [responsiveStoreEnhancer],
})
*/

// Simple Routing
Render(states, (
  <Router>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='counter' component={Counter} />
    </Route>
  </Router>
))
