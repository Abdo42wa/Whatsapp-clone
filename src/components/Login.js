import { Button } from '@material-ui/core'
import React from 'react'
import {useDispatch} from 'react-redux'
import {login} from '../redux/UserAction'
import { auth, provider } from '../firebase';


const Login = ({history}) => {
    const dispatch = useDispatch()



    const signIn = async (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).then( async result => {
            const {user} = result
            const id = await user.getIdTokenResult();
            dispatch(login(user.email,id.token))
        })
        .catch((error) => alert(error.message))
    }
    return (
        <div className='login'>

            <div className='login-container'>
            <h1>Login</h1>
                <img src='https://logos-world.net/wp-content/uploads/2020/05/WhatsApp-Logo.png' alt=''/>
                <div className='login-text'>
                    <h1>Sign in to WhatsApp</h1>
                </div>

                <Button onClick={signIn}> Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login

