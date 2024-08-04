import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../../API';
import { languageContext } from '../../context';

const ActorKnow = () => {
    const [know,setKnow]=useState([])
    const{language}=useContext(languageContext)
 let {id}= useParams()
    function getknown(key){
        axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=${language}`).then((res)=>{
        setKnow(res.data.cast)   
        })
            }
            useEffect(()=>{
                getknown(API_KEY)

            },[language])
    return (
        <div className="know">
        {
            know?.map((el)=>(
          <div className="knowblock">
                  <img style={{
                    width: "200px"
                }} src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${el.poster_path}`} alt="img" />
                <h2>{el.title}</h2>
                <h3>{el.release_date}</h3>
          </div>
            ))
        }
    </div>
    );
};

export default ActorKnow;