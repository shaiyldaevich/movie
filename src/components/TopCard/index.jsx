import React from 'react';

const TopCard = ({el}) => {
    return (
        <div className='topcard'>
            <img src={`https://media.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt="" />
            <h4>{el.title}</h4>
            <h4>{el.release_date}</h4>
        </div>
    );
};

export default TopCard;