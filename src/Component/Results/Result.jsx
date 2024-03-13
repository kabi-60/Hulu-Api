import { useEffect, useState } from "react";
import axios from "../Helpers/axios";
import VideoCard from "../VideoCArd/VideoCard";
import './Result.css' ;
import FlipMove from "react-flip-move";

const Result = ({selectedOption}) => {
  const [movies,setMovies]= useState([])


  useEffect(()=>{
    
    const fetchData =async()=>
    {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results)
    };
    fetchData(); 
    },[selectedOption]);
    // console.log(movies);
  return (
    <div className="results">
      {
        movies.map((movie)=> (
          <VideoCard key={movie.id} movie={movie} /> 
        ))
      }
    </div>
  );
};

export default Result;
