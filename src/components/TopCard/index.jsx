import React from 'react';
import { NavLink } from 'react-router-dom';

const TopCard = ({el}) => {
    console.log(el);
    return (
        <div className='topcard'>
           <NavLink style={{
            width:'100%',
            height:'90%'
           }}to={`/topdet/${el.id}`}> <img src={`https://media.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt="" /></NavLink>
            <h4>{el.title}</h4>
            <h4>{el.release_date}</h4>
        </div>
    );
};

export default TopCard;