import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styling.css';
import Icon from './Icon.png';
import Sign from './sign.png';

function Login()
{
    return(
        <div className='Log'>
            <div><img src={Icon} alt='' /></div>
            {/* <div className='sign'>Sign in to your Account</div> */}
            <div className='sign'><img src={Sign} alt=''/></div>
            <form method='POST'>
            <label>Your email</label><br/>
            <input type="email" className="search-bar" name="email" /><br/>
            <label>Password</label><br/>
          <input type="password" className="search-bar" name="email" /><br/>
          <button type='submit'>CONTINUE</button>
            </form>
            <div className='forget'>Forget your password?</div>
            <div className='signup'>Don't have an account?<a href=''>Sign up</a></div>
        </div>
    );
}

ReactDOM.render(<Login />, document.getElementById('appl'));