import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { API_KEY } from '../../API';
import { useParams } from 'react-router-dom';
import { MdOutlineFormatListNumbered } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { GrSave } from "react-icons/gr";
import { IoStarSharp } from "react-icons/io5";
import Actors from '../Actors';
import Video from '../video';
import { languageContext } from '../../context';

const Topdet = () => {
    const[modal,setModal]=useState(false)
    const [details,setdetails]=useState({})
    const [like,setLike]=useState(false)
    const [star,setStar]=useState(false)
    let {id} = useParams()
    const{language,dark,favorite,setFavorite}=useContext(languageContext)
    function getMov(date){
        setLike(!like)
    let findMovie=favorite.find((el)=>el.id ===date.id)
    if(findMovie){
        const filteredMovies= favorite.filter((el)=>el.id!==date.id)
        setFavorite(filteredMovies)
    }else{
        setFavorite((prev)=>[...prev,date])
    }
      }
    function getDetails(key){
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=${language}`).then((res)=>{
            setdetails(res.data)
            // console.log(res);
        })
    }
    useEffect(()=>{
        getDetails(API_KEY)
    },[language])
    // console.log(details);
    let {
        title,
        release_date,
        genres,
        runtime,
        vote_average,
        tagline,
        overview
        

    } = details
    let res1 = details.runtime;

    const res = res1;
    const hours = Math.floor(res / 60);
    const min = res % 60;

    return (
        <div style={{
            background:dark?'black':'white'
        }}>
        <div id='details'style={{
            background:`url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${details.backdrop_path}) no-repeat center/cover`
        }}>
            <div className="container">
                <div className="details">
                    <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${details.poster_path}`} alt="" onClick={()=>{setModal(!modal)}}/>
                <div className="cont">
                <h1>{title}</h1>
                <div className="charecter">
                    <h2>{release_date}</h2>
                {
                    genres?.map(el=> (
                        <h3>*{el.name}</h3>
                    ))
                }
                <h2>{`${hours}h${min}m`}</h2>

                </div>
                   <div className="reiting">
                   <div className="circle">
                   <h3>{(vote_average *10 ).toFixed()}%</h3>
                   </div>
                    <div className="reiting-nav">
                    {/* <p>Рейтинг</p> */}
                    </div>
                    <div className="icons">
                    <div className="num">
                    <MdOutlineFormatListNumbered style={{
                        color:'white'
                    }}/>
                    </div>
                    <div className="like">
                    <FaHeart  onClick={()=>{
                        getMov(details)
                    }} style={{
                        color:like?'red':'white',
                        fontSize:'24px'
                        }}/>
                    </div>
                    <div className="save">
                    <GrSave style={{
                        color:'white'
                    }}/>
                    </div>
                    <div className="star">
                    <IoStarSharp onClick={()=>{
                        setStar(!star)
                    }} style={{
                        color:star?'yellow':'white'
                    }}/>
                    </div>
                    </div>

                    </div>  
                    <div className="discription">
                        <h3>{tagline}</h3>
                        <h2>obzor</h2>
                        <p>{overview}</p>
                    </div>
                
                </div>
                
                <div className="modal"style={{
                    display:modal?'block':'none',
                    top:'200px'
                }}>
                    <h1 style={{
                        marginLeft:'320px',
                        color:'red'
                    }}onClick={()=>{setModal(!modal)}}>x</h1>
                <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${details.poster_path}`} alt="" />
                <h1>{title}</h1>
                <h3>{vote_average}</h3>
                </div>
              
                </div>
                 
            </div>
        </div>
        <Actors/>
                 <Video/>
        </div>
    );
};

export default Topdet;