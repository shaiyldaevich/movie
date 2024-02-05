import React from 'react';

const Movie = ({el}) => {
    return (
        <div className='movieCard'>
            <img src={`https://media.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt="img  " />
            <h4>{el.title}</h4>
            <h4>{el.release_date}</h4>
        </div>
    );
};

export default Movie;