import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_KEY } from '../../API';
import { useParams } from 'react-router-dom';

const Video = () => {
    const [trailer,setTrailer]=useState([])
    let {id} = useParams()

    function getTrailer(key){
   axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`).then((res)=>{
    setTrailer(res.data.results)
   })
    }
    useEffect(()=>{
getTrailer(API_KEY)
    },[])
    let{key}=trailer
    // console.log(trailer);
    return (
        <div id='video'>
          <div className="container">
          <div className="video">
                
               {
                trailer.map((el) => (
                    <iframe width="600" height="420" 
                    src={`https://www.youtube.com/embed/${el.key}`} 
                    title="Sadraddin - Qansha kun? (Official M/V)" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen></iframe>   
                ))
               }         
           </div>
          </div>
        </div>
    );
};

export default Video;