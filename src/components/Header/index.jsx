import React, { useContext, useState } from 'react';
import logo from '../../img/logo.svg'
import { NavLink, useNavigate } from 'react-router-dom';
import { languageContext } from '../../context';
import { CgDarkMode } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
const Header = () => {
    const[inputValue,setInputValue]=useState('')
    const nav = useNavigate()
    const{setLanguage,language}= useContext(languageContext)
    const {setDark,dark}=useContext(languageContext)
    return (
        <div id='header' style={{
            background:dark?'#00000097':'#00000055'
        }}>
            <div className="container">
                <div className="header">
                    <img src={logo} alt=""width={'220px'} />
                    <div className="header-nav">
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'popular'}>Popular</NavLink>
                    <NavLink to={'toprated'}>Top-Rated</NavLink>
                    </div>
                    <select onChange={(e)=>setLanguage(e.target.value)}>
                    <option value="en-US">English</option>
                    <option value="ru-RU">Russian</option>
                    <option value="fr-FR">France</option>
                        
                    </select >
                    <div className='darkmode' style={{
                        color:'white',
                        fontSize:'30px',
                    }} onClick={()=> setDark(!dark)}>
                    <CgDarkMode />
                    </div>
                    <NavLink to={'/favorite'} style={{
                        color:'white',
                        fontSize:'20px'
                    }}>
                    <FaRegHeart />
                    </NavLink>
                    <div className="search">
                    <input type="text" value={inputValue} placeholder='search' 
                    onInput={(e)=>{
                        nav(`/search/${e.target.value}`)
                    }} 
                    onChange={(e)=>setInputValue(e.target.value)}/>


                    <button style={{
                        display:inputValue?'block':'none'
                    }}
                    onClick={inputValue?()=>{
                        nav(`/search/${inputValue}`)
                        setInputValue('')
                    }:null}>
                        search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;