// import {useNavigate} from "react-router-dom"
import { store } from './redux/store'
// import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { getAccessToken, removeTokens } from './services/localStorage';
import { useEffect } from 'react';

const ProtectedRoute = ({children}: any) => {

    const navigate = useNavigate();

    useEffect(() => {
       console.log('OOOOI', getAccessToken())
      if(!getAccessToken()) {
         console.log('HELOOOOOOOOO')
         removeTokens()
         navigate("/")
       }
    }, []);

  
 return children

};

export default ProtectedRoute;