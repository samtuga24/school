import React from 'react'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { JobList } from './JobList'
import { HomeImage } from './HomeImage'

export const Home = () => {
  return (
    <div className='home-wrap'>
    <Nav/>
    <HomeImage/>
    <JobList/>
    <Footer/>
    </div>
  )
}
