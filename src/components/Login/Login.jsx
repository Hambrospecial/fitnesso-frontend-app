import React, { useState } from 'react';
import {loginUser} from '../services/userAuth';
import './Login.css';
import axios from "axios";
import { Link } from 'react-router-dom'

const LoginUser = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [bearer, setBearer] = useState(false);

    
    async function sendLoginRequest(e) {
        e.preventDefault();
        const reqBody = {
            username: username,
            password: password,
        };
        const url = 'https://fitnesso-app-new.herokuapp.com/person/login';
        const homeurl = "http://localhost:3000/";

        try {
            localStorage.setItem("username", reqBody.username)
            const loginResponse = await axios.post(url, reqBody);
            localStorage.removeItem("token")
            localStorage.setItem("token", loginResponse.data.token)
            console.log(localStorage.getItem(loginResponse.data.token))
          
            window.location.replace(homeurl)

        } catch (e) {
            // console.log("Incorrect username or password!");
            console.log(e)
        }

    }
    
    const [disabledButton, setDisabledButton] = React.useState(false);
    return(
        <div className="login-container">
            <div className='login'>
                <p className="sign" align="center">LOGIN</p>
                <form className='form1'>
                    <input type="text" className='username' align="center" 
                    placeholder='Username' value={username} onChange={(event) => setUsername(event.target.value)} required/>
                    
                    <input type="password" className='password' align="center" 
                    placeholder='Password' value={password} onChange={(event) => setPassword(event.target.value)} required/>
                    
                    <button type='submit' className='submit' disabled={disabledButton} onClick={sendLoginRequest} href="/">Login</button>
                    
                    <p className="forgot" align="center"><a href="#">Forgot Password?</a> </p><br></br>
                    <p className="register" align="center">No account? <a href="#">Register here!</a></p><br></br>
                    <p className="cancel" align="center"><a href="/">Cancel</a> </p><br></br>
                </form>
            </div>
        </div>
    );
};

// onSubmit={() => sendLoginRequest(setDisabledButton)
export default LoginUser;