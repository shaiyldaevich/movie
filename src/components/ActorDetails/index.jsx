import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../../API';
import user from '../../img/user.png'
import ActorKnow from '../ActorKnow';
import { languageContext } from '../../context';


const ActorDetails = () => {
    const [actdet,setActdet]=useState({})
    const [read,setRead]=useState(false)
    const{language}=useContext(languageContext)
    let {id} = useParams()
  
    function getActersdet(key){
axios(`https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=${language}`).then((res)=>{
setActdet(res.data)
// console.log(res.data);

})
    }
    useEffect(()=>{
getActersdet(API_KEY)
    },[language])
    return (
        <div id='actordet'>
            <div className="container">
                <div className="actordet">
                {actdet.profile_path ?(
        <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${actdet.profile_path}`} alt="img" />
      ):( <img src={user} alt='img' width={350} height={400}/>
      )}
                    
                    <div className="act-nav">
                        <h1>{actdet.name}</h1>
                        <h2>{actdet.birthday}</h2>
                        <h3>Biography</h3>
                        <p >{ 
                        
                            !read ? actdet.biography?.slice(0,200) :actdet.biography?.slice(0) 
                        } <span  onClick={()=>{
                            console.log("hello");
                            setRead(!read)
                        }} style={{
                            
                            fontFamily:'-moz-initial',
                            fontWeight:'900',
                            color:'red'
                        }}>{!read ?'read more...':'close'}</span> </p>
                     
                        <div className="also" style={{
                         
                        }}>
                        <h4 style={{
                            width:'300px'
                        }}>Also known as: <br />{actdet.also_known_as}</h4>
                        </div>
                       
                    </div>
                </div>
                   <ActorKnow/>
            </div>
        </div>
    );
};

export default ActorDetails;