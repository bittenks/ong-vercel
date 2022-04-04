import { useEffect, useState } from 'react';
import React from 'react';
import './index.css';
import Signin from './components/Signin';
import { auth } from '../../util/firebase';
import PetForm from '../PetForm';


function Login() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email
      }
      if (userAuth) {
        console.log(userAuth)
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return unsubscribe
  }, [])
  return (
    <div className="Login">
      {user ? <PetForm /> : <Signin />}

    </div>
  );
}

export default Login;
