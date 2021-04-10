import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from '../firebase';

const Login = () => {
    const signIn =(e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).then(result => console.log(result))
        .catch((error) => alert(error.message))
    }
    return (
        <div className='login'>

            <div className='login-container'>
            <h1>Login</h1>
                <img src='https://logos-world.net/wp-content/uploads/2020/05/WhatsApp-Logo.png' />
                <div className='login-text'>
                    <h1>Sign in to WhatsApp</h1>
                </div>

                <Button onClick={signIn}> Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login

