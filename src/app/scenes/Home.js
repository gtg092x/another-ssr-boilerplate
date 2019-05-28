import React from 'react'
import { useSelector } from 'react-redux'
import Nav from '../shared/Nav'
import { selectHome } from '../services/reducer'

const Home = () => {
  const { content } = useSelector(selectHome)
  return (
    <div>
      <Nav />
      <h1>Home</h1>
      <p>{content || 'Loading...'}</p>
    </div>
  )
}

export default Home
