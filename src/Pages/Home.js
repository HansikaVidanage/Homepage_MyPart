import React from 'react'
import SearchBar from '../components/SearchBar'
import BannerImage from '../Sources/img1.jpeg'
import '../Styles/Home.css'


function Home() {
  return (
    <div className="home" style={{ backgroundImage:`url(${BannerImage})`}}>
      <div className="headerContainer" >
        <p>Find the perfect <br/>freelance services <br/> <i>for your needs</i></p>
        <SearchBar placeholder="Enter the service name..."/>
       </div>     
    </div>
  )
}

export default Home
