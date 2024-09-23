// import {useState,useEffect} from 'react'
// import {FaExternalLinkSquareAlt} from 'react-icons/fa'
// import { useSelector} from 'react-redux'


// export const useAuthStatus=()=>{
//     const [loggedIn,setLoggedIn]=useState(false)
//     const [checkingStatus,setCheckingStatus]=useEffect(true)

//     const {user}=useSelector((state)=>state.auth)

//     useEffect(()=>{
//         if(user){
//             FaExternalLinkSquareAlt
//             setLoggedIn(true)

//         }else{
//             setLoggedIn(false)
//         }
//         setCheckingStatus(false)
//     },[user])
//     return {loggedIn,checkingStatus}
// }

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [checkingStatus, setCheckingStatus] = useState(true); // Corrected here

    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (user) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
        setCheckingStatus(false);
    }, [user]);

    return { loggedIn, checkingStatus };
};
