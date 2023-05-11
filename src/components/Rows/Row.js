import axios from '../../axios';
import React, { useEffect, useState } from 'react'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import requests from '../../Requests';
import './Row.css'


function Row({title, fetchUrl, isLarge = false, setPreview, unique}) {

    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request =await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request
          }
          fetchData();

    },[fetchUrl]);


    function leftClick(){
        const rowScrolleft = document.querySelector(`#${unique}`);
        rowScrolleft.scrollBy(-350, 0);
        
        
    }
    const rightClick =()=>{
        const rowScrollright = document.querySelector(`#${unique}`);
       rowScrollright.scrollBy(350, 0)
    }
  return (
    <div className="row" >
    
        <div className="row__left" onClick={leftClick}><BsChevronLeft/></div>
        <div className="row__right"onClick={rightClick}><BsChevronRight/></div>
        
        <div className="row_content">
            <h1 className="row_title">{title}</h1>
                <div className='row_posters' id={unique}>
                    {movies.map((movie,key)=>(
                      
                        <img key={key}className={`row_poster ${isLarge && "row_posterLarge"}`} 
                    src={`https://image.tmdb.org/t/p/original/${isLarge? movie?.backdrop_path:movie?.poster_path}`} alt="" 
                    onClick={()=>{
                        setPreview(movie);
                    }}
                    />
                    ))}
                </div>
        </div>
    </div>
  )
}

export default Row