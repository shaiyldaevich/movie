import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { API_KEY } from '../../API';
import { languageContext } from '../../context';
const Home = () => {
    const[bg,setbg]=useState([])
    const{language,dark}=useContext(languageContext)
let result = []

function getRandombg(key){
    axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=1`).then((res)=>{
        res.data.results.map((el)=>{
        result = [...result,el.backdrop_path]
        setbg(result)
})
    })
}
// const getRandom = ()=>{
//     let idx =Math.round(Math.random * bg.length);
//     console.log(idx);
// }
useEffect(()=>{
getRandombg(API_KEY);
// getRandom()
},[])
// console.log(bg);
    return (
        <div id='home' style={{
            background: dark? 'black':'white'
        }}>
            <div className="container">
                <div className="home">
                <div className="welcome" style={{
                    background: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${bg[Math.round(Math.random()*bg.length)]}) no-repeat center/cover`
                }}>
                <h1>Добро пожаловать.</h1>
                <h2>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h2>
                <div className="input">
                <input type="text"  placeholder='найти фильм,сериалы,персону.....'/>
                <button>search</button>
                </div>
                </div>
                <div className="wrap">
                 <h1>That's a <br />
                 Wrap 2023</h1>
                 <h2>The best (and worst) of the year from TMDB.</h2>
                 <button>Check it out</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Home;