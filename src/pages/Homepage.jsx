import React from 'react'
import NavBar from '../components/Home/NavBar'
import Footer from '../components/Home/Footer'
import { Outlet } from 'react-router-dom'

function Homepage() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Homepage
