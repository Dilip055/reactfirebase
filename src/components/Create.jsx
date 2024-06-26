import React, { useState } from 'react';
import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

function Create() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const createAccount = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, username, password)
            .then((userCredential) => {
                console.log('User created:', userCredential.user);
                // Optionally, you can redirect or perform other actions upon successful creation
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Error creating user:', errorCode, errorMessage);
            });
    };

    return (
        <div className='container'>
        <div className="create">
            <form onSubmit={createAccount}>
                <h1>Create new account</h1>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <div className='btn'>
                
                <a href="/"className='login-btn'>
                    <Link to="/login">Login</Link>
                </a>
                </div>
                <button type="submit" className='create-btn'>Create</button>
            </form>
        </div>
        </div>
    );
}

export default Create;
