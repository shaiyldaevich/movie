import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_KEY } from '../../API';
import TopCard from '../TopCard';

const TopRated = () => {
    const [top,setTop]=useState([])
    const [pogination,setPogination]=useState(1)
function getTop(key){
    axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=${pogination}`).then((res)=>{
        setTop(res.data.results)
})
}
useEffect(()=>{
getTop(API_KEY)
},[pogination])
    return (
        <div id='top'>
            <div className="container">
                <h1>popular</h1>
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