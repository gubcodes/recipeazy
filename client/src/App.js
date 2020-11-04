import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Home from './components/Home';
import RecipeNavbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'; 


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
  const [sessionToken, setSessionToken] = useState("");


  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };


useEffect(() => {
  document.title = "Recipeazy - Find recipes with EAZE";
}, []);


  return (
    <div className={classes.root}>
      <CssBaseline />
      <Router>
      <RecipeNavbar/>
      <Home/>
      </Router>
    </div>
  );
}

export default App;