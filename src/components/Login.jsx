import React, { useEffect } from 'react'
import { useState } from 'react'
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)

    const loginAccount = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, username , password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user);
    })
    .catch((error) => {
            console.log(error);
    });
}
useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((user) => {
        if(user) {
            setUser(user);
        } else {
            setUser(null);
        }
    });
    return ()=> unsubscribe();
},[])
const logOut = () => {
    signOut(auth)
    .then(() => {
        setUser(null);
    }).catch((error) => {
        console.log(error.message);
    });
}

  return (
    <div className='container'>
    <div className='login'>
        <form onSubmit={loginAccount}>
            <h1>Login here</h1>
            <input type="text" placeholder="Username" required value={username} onChange={(e)=>setUsername(e.target.value)} />
            <input type="password" placeholder="Password" required  value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button className='create-btn' type='submit'>Login</button>
        </form>
        {user?(<div className='text'><p>Welcome, {user.email}</p>
        <button onClick={logOut} className='logout'>Log Out</button></div>):(<p className='logged-in'>You are not Logged In</p>)}
    </div>
    </div>
  )
}

export default Login