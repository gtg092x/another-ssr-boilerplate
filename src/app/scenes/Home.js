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
      {content || 'Loading...'}
    </div>
  )
}

export default Home
