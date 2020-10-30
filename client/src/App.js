import React, { useEffect, useState } from "react";
//import Sitebar from './home/Navbar.js';
import Auth from "./auth/Auth.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Search from "./features/Search";

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

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  {
    /*
  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <WorkoutIndex token ={sessionToken}/> : <Auth updateToken={updateToken}/>)
  }  */
  }

  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <Search token={sessionToken} />
    ) : (
      <Auth updateToken={updateToken} />
    );
  };

  useEffect(() => {
    document.title = "Recipeazy - Find recipes with EAZE";
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Drawer />
      {/*} <Sitebar clickLogout={clearToken}/>
      {protectedViews()}
  */}
      <div className="App">
        {protectedViews()}
        {/* <Auth /> */}
      </div>
      <Auth updateToken={updateToken} />
    </div>
  );
}

export default App;
