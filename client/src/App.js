<<<<<<< Updated upstream
import React from 'react'
=======
import React, { useEffect, useState } from 'react';
//import Sitebar from './home/Navbar.js';
import Auth from './auth/Auth.js';
import 'bootstrap/dist/css/bootstrap.min.css'
>>>>>>> Stashed changes
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Drawer from './components/Drawer';

<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
const useStyles = makeStyles((theme) => ({
root: {
  minHeight: '100vh',
  backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/grocery8.jpg'})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  
},
}));

<<<<<<< Updated upstream
export default function App() {
=======
function App() {

>>>>>>> Stashed changes
  const classes = useStyles();
  return(
    <div className={classes.root}>
        <CssBaseline />
        <Header />
        <Drawer />
<<<<<<< Updated upstream
    </div>
  )
}
=======
    </div>
  )
}

  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

{/*
  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <WorkoutIndex token ={sessionToken}/> : <Auth updateToken={updateToken}/>)
  }  */}

  useEffect(() => {
    document.title = "Recipeazy - Find recipes with EAZE"
  }, []);

  return (
    
    <div>
     {/*} <Sitebar clickLogout={clearToken}/>
      {protectedViews()}
  */}
    <Auth updateToken={updateToken}/>
    </div>
  );




export default App;
>>>>>>> Stashed changes
