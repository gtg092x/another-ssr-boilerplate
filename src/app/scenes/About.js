import React from 'react'
import { useSelector } from 'react-redux'
import Nav from '../shared/Nav'
import { selectAbout } from '../services/reducer'

const About = () => {
  const { content } = useSelector(selectAbout)
  return (
    <div>
      <Nav />
      <h1>About</h1>
      {content || 'Loading...'}
    </div>
  )
}

export default About
