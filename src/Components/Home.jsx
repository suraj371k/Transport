import React from 'react'
import {Header , Story , Services , Stats , Quote} from '../index'
import { Route , Routes , BrowserRouter} from 'react-router-dom'

function Home() {
  return (
    <div>
        <Header/>
        <Story/>
        <Services/>
        <Stats/>
        <Quote/>
    </div>
  )
}

export default Home