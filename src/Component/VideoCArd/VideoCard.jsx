import React from 'react'
import './VideoCard.css';
import TextTruncate from 'react-text-truncate';
import { ThumbUp, ThumbUpSharp } from '@mui/icons-material';

const base_url = "https://image.tmdb.org/t/p/original"
const VideoCard = ({movie}) => {
  return (
    <div className='videocard'>
        <img src={`${base_url}${movie.backdrop_path|| movie.poster_path}`}
        alt=''/>
        <TextTruncate
         line={1}
         element='p'
         truncateText='.....'
         text={movie.overview}
         />
         <h2>{movie.original_name|| movie.title}</h2>
         <p className='content'>
            {movie.media_type} {" "}
            {movie.release_date}
            <ThumbUpSharp/>{" "}{movie.vote_count}
         </p>
    </div>
  );

};

export default VideoCard
