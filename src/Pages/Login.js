import React, { useState } from 'react'
import SignInOutContainer from '../components/containers/SignInOutContainer';
import {Navigate} from 'react-router-dom';
import { auth } from '../firebase-config';
import { onAuthStateChanged, signOut } from 'firebase/auth';


function Login(authorized) {

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    console.log(user)
  if(user != null){
      if(Object.keys(user).length != 0 ){
      console.log(user)
    return <Navigate to = "/" />}
  }

  return (
            <SignInOutContainer/>

  )
}

export default Login