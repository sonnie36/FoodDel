import React from 'react'
import './Home.css'
import Header from './Header'
import { ExploreMenu } from '../../Components/ExploreMenu/ExploreMenu'
const Home = () => {
  return (
    <div>
      <Header/>
      <ExploreMenu/>
    </div>
  )
}

export default Home