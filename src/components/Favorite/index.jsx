import React, { useContext } from 'react';
import { languageContext } from '../../context';
import Movie from '../MOVIE';
import TopCard from '../TopCard';

const Favorite = () => {
    const{favorite,setFavorite,dark}=useContext(languageContext)
    return (
        <div id='favorite' style={{
            background:dark?'black':'white'
        }}>
            <div className="container">
                <div className="favorite">
                {
                    favorite.map((el)=> (
                        <div>
                            <Movie el={el}/> 
                            {/* <TopCard el={el}/>  */}
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    );
};
export default Favorite;