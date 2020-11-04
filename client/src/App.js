import React, { useEffect, useState } from "react";
//import Sitebar from './home/Navbar.js';
import Auth from "./auth/Auth.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";
import Search from './features/Search'
import { Navbar } from "reactstrap";
import Home from './components/Home';
import RecipeNavbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'; 

//import Drawer from "./components/Drawer";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/grocery8.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

function App() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [sessionToken, setSessionToken] = useState("");


  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  {
    /*
const clearToken = () => {
  localStorage.clear();
  setSessionToken("");
};
*/
  }


useEffect(() => {
  document.title = "Recipeazy - Find recipes with EAZE";
}, []);
{/*
const protectedViews = () => {
  return (sessionToken === localStorage.getItem('token') ? <Search token ={sessionToken}/> : <Auth updateToken={updateToken}/>)
}  

  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <Search token={sessionToken} />
    ) : (
      <Auth updateToken={updateToken} />
    );
  };*/}


  return (
    <div className={classes.root}>
      <CssBaseline />
      <Router>
      <RecipeNavbar/>
      </Router>
      
      {/*<div>{protectedViews()}</div>


      <Drawer />
          } <Sitebar clickLogout={clearToken}/>
          <div>
      {protectedViews()}
      </div>*/}
      
    </div>
  );
}

export default App;
