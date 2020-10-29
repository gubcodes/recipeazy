import React, { useEffect, useState } from "react";
//import Sitebar from './home/Navbar.js';
import Auth from "./auth/Auth.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
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

  useEffect(() => {
    document.title = "Recipeazy - Find recipes with EAZE";
  }, []);

  return (
    <div>
      {/*} <Sitebar clickLogout={clearToken}/>
      {protectedViews()}
  */}
      <Auth updateToken={updateToken} />
    </div>
  );
}

export default App;
