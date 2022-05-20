import React from 'react'
import {BrowserRouter, Route} from "react-router-dom"
import HomeComponent from './components/HomeComponent'


const App = () => {
  return (
    <BrowserRouter>
       <Route path="/" component={HomeComponent} exact />
       
    </BrowserRouter>
  )
}

export default App