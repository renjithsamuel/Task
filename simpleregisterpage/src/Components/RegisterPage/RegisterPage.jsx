
import './RegisterPage.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


function RegisterPage({setCurrPage}) {

    const [registerData , setRegisterData ] = useState({});

    const handleChange =  ( value , key ) => {
        let tempRegisterData = {...registerData};
        tempRegisterData[key] = value;
        setRegisterData(tempRegisterData);
        console.log(tempRegisterData);
    }

    const handleSubmit = () => {

        if(!registerData.username || !registerData.email || !registerData.dob  || !registerData.password ){
            alert('Enter Valid Data')
            return;
        }
        const regData = JSON.stringify(registerData);
        localStorage.setItem('userData', regData);
        alert('register Successfull!')
        setCurrPage('login')
    }

    return ( <>
                <div className="registerPageWrapper">
                <div className="registerInputFieldsWrapper">
                        <div className="registerPageName">Register</div>
                        <TextField id="outlined-basic" label="UserName" variant="outlined" onChange={(e) => handleChange(e.target.value,"username")}/> 
                        <TextField id="outlined-basic" label="Email ID" type='email' variant="outlined" onChange={(e) => handleChange(e.target.value,"email")}/>
                        <TextField id="outlined-basic" label="" type='date' variant="outlined" onChange={(e) => handleChange(e.target.value,"dob")}/>
                        <TextField id="outlined-basic" label="password" type='password' variant="outlined" onChange={(e) => handleChange(e.target.value,"password")}/>
                        <Button variant="contained" onClick={()=>{handleSubmit()}}>Register</Button>
                          already have an account? <span onClick={()=>{setCurrPage('login')}}>Login</span>
                </div>
            </div>
            </> );
}

export default RegisterPage;