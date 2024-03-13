import React from 'react'
import './Navbar.css';
import requests from '../Helpers/requests';
const Navbar = ({setSelectedOption}) => {
  return (
    <div className='navbar_container'>
      <h2 onClick={()=>setSelectedOption(requests.fetchTrending)}>Trending</h2>
      <h2 onClick={()=>setSelectedOption(requests.fetchAnimation)}>Action</h2>
      <h2 onClick={()=>setSelectedOption(requests.fetchTopRated)}>Top Rated</h2>
      <h2 onClick={()=>setSelectedOption(requests.fetchComedyMovies)}>Comedy</h2>
      <h2 onClick={()=>setSelectedOption(requests.fetchRomanceMovies)}>Romance</h2>
      <h2 onClick={()=>setSelectedOption(requests.fetchMysteryMovies)}>Mystery</h2>
      <h2 onClick={()=>setSelectedOption(requests.fetchSciFi)}>Sci-fy</h2>
      <h2 onClick={()=>setSelectedOption(requests.fetchWestern)}>Western</h2>
      <h2 onClick={()=>setSelectedOption(requests.fetchTv)}>TV</h2>
    </div>
  )
}

export default Navbar
