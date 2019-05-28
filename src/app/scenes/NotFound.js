import React, { useContext } from 'react'
import Nav from '../shared/Nav'
import { SetStatusContext } from '../App'

const NotFound = () => {
  const setStatus = useContext(SetStatusContext)
  if (setStatus) {
    setStatus(404)
  }
  return (
    <div>
      <Nav />
      <h1>Not Found</h1>
      <p>This page wasn't found. You still got that 404 if you loaded it on the server.</p>
    </div>
  )
}

export default NotFound
