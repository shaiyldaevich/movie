import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { API_KEY } from '../../API';
import TopCard from '../TopCard';
import { languageContext } from '../../context';

const TopRated = () => {
    const [top,setTop]=useState([])
    const [pogination,setPogination]=useState(1)
    const {language,dark }=useContext(languageContext)
function getTop(key){
    axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${language}&page=${pogination}`).then((res)=>{
        setTop(res.data.results)
})
}
useEffect(()=>{
getTop(API_KEY)
},[pogination,language])
    return (
        <div id='top'style={{
            background:dark?"black":'white'
        }}>
            <div className="container">
                <div className="top">
{
    top.map((el)=>(<TopCard el={el}/>))
}
                </div>
                <div className="pogination">
                <button onClick={()=>{
                      setPogination(pogination > 1 ? pogination-1 :pogination)
                }}>Back</button>
                <h1>{pogination}</h1>
                <button onClick={()=>{
                    setPogination(pogination+1)
                }}>next</button>
                </div>
            </div>
        </div>
    );
};

export default TopRated;