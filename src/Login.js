import React from 'react';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';

import './Login.css';

function Login() {

    const signIn = () => {
        //do some google login stuff
        auth.signInWithPopup(provider).catch((error)=> alert(error.message));

    }

    return (
        <div className='login'>
            <div className='login__page'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Discord_Color_Text_Logo_%282015-2021%29.svg/492px-Discord_Color_Text_Logo_%282015-2021%29.svg.png' alt='' />
            </div>
            <Button onClick={signIn}> Sign In</Button>
        </div>
    )
}

export default Login
