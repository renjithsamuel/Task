import { useState } from 'react';
import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import RegisterPage from './Components/RegisterPage/RegisterPage';


function App({}) {
  const [currPage , setCurrPage] = useState('login');

  return ( <>
          {
            (currPage == 'login') ?
              <LoginPage setCurrPage={setCurrPage}/>
          : 
            <RegisterPage setCurrPage={setCurrPage}/>
          }
        </> );
}

export default App;