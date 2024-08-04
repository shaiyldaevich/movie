import React, { useState } from 'react';
import { languageContext } from '.';
const RootContext = ({children}) => {
    const[language,setLanguage]=useState('en-US ')
const[dark,setDark]=useState(false)
    const[favorite,setFavorite]=useState([])
    return (
       <languageContext.Provider value={{
           language,
           setLanguage,
           dark,
           setDark,
           favorite,
           setFavorite,
       }}>
            {children}
       </languageContext.Provider>
    );
};

export default RootContext;