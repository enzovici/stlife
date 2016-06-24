import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Dashboard from './components/newsfeed/newsfeed'
import About from './components/about/about'
import NotFound from './components/common/not_found'


export default (
  <Route path='/' component={App}>
    <IndexRoute component={Dashboard} />
    <Route path='/about' component={About} />
    <Route path='*' component={NotFound} />
  </Route>
 )


   //
  //  <Route path="/invoices/:id" component={Invoice}/>
  //  <Route path="/organizations/:id" component={Organization}/>
   //
