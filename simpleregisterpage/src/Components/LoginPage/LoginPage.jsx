import './LoginPage.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function LoginPage({setCurrPage}) {

    const [loginData , setloginData ] = useState({});

    const handleChange =  ( value , key ) => {
        let temploginData = {...loginData};
        temploginData[key] = value;
        setloginData(temploginData);
        console.log(temploginData);
    }

    const handleLogin = () => {

        if(!loginData.email || !loginData.password ){
            alert('Enter Valid Data')
            return;
        }
        const logData = JSON.stringify(loginData);
        localStorage.setItem('userLoginData', logData);
        alert('login Successfull!')
        // setCurrPage('register')
    }

    return ( <>
                <div className="pageWrapperLogin">
                <div className="inputFieldsWrapperLogin">
                        <div className="LoginPageName">Login</div>
                        <TextField id="outlined-basic" label="Email ID" variant="outlined" onChange={(e) => handleChange(e.target.value,"email")}/>
                        <TextField id="outlined-basic" label="password" variant="outlined" onChange={(e) => handleChange(e.target.value,"password")}/>
                        <Button variant="contained" onClick={()=> handleLogin()}>Login</Button>
                        Don't have an account? <span onClick={()=>{setCurrPage('register')}}>Register</span>
                </div>
            </div>
            </> );
}

export default LoginPage;