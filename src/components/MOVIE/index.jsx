import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({el}) => {
    return (
        <div className='movieCard'>
<Link to={`/moviedetails/${el.id}`}>
<img src={`https://media.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt="img  " style={{
    borderTopLeftRadius:'12px',
    borderTopRightRadius:'12px',
}}/>

</Link>
            <h4>{el.title}</h4>
            <h4>{el.release_date}</h4>
        </div>
    );
};

export default Movie;