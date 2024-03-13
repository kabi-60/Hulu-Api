import React from 'react'
import './Header.css';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HomeIcon from '@mui/icons-material/Home';
import requests from '../Helpers/requests';
const Header = ({setSelectedOption}) => {
  return (
    <div className='header_Container'>
        <div className='header_icons '>
            <div className='header_icon home_page'>
                <HomeIcon/>
                <p>Home</p>
            </div>
            <div className='header_icon'>
                <LiveTvIcon/>
                <p>Live Tv</p>
            </div>
            <div className='header_icon'>
                <PersonOutlineIcon/>
                <p>Profile</p>
            </div>
            <div className='header_icon'>
                <SearchIcon/>
                <p>Search</p>
            </div>
            <div className='header_icon'>
                <VideoLibraryIcon/>
                <p>Collection</p>
            </div>
            <div className='header_icon'>
                <WhatshotIcon/>
                <p onClick={()=>setSelectedOption(requests.fetchTrending)}>Trending</p>
            </div>
        </div>
           
      
    </div>
  )
}

export default Header
 