import React, { useState } from 'react';
import { AppBar, IconButton, makeStyles, Toolbar, } from '@material-ui/core';
import {
    Route,
    Switch,
} from 'react-router-dom'
import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';
import Search from '../features/Search';
import Auth from '../auth/Auth';
import Home from '../components/Home';
import ListDisplay from '../features/List';


const useStyles = makeStyles((theme) => ({
  colorText: {
      fontFamily: "Grandstander",
      color: "#18E817",
  },
  colorText2: {
      fontFamily: "Grandstander",
      color: "#E717E8",
  },
  button1: {
    fontFamily: "Grandstander",
    color: "#18E817",
    backgroundColor: "#E717E8"
  }
}));

const RecipeNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const classes = useStyles();

  const [sessionToken, setSessionToken] = useState("");

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  const logOut = () => {
    localStorage.clear("token")
  };

  
  return (
    <div className={classes.root}>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/home"><span className={classes.colorText2}>Recip</span><span className={classes.colorText}>Eazy</span></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            
            <NavItem>
              <NavLink href="/search"><span className={classes.colorText2}>Recipe Search</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/list"><span className={classes.colorText}>Shopping List</span></NavLink>
            </NavItem>
          </Nav>
          <Nav>
            <Auth updateToken={updateToken}/>
          </Nav>
          <Nav>
            <Button className={classes.button1} style={{ marginRight: 25 }} onClick={logOut}>Log out</Button>
            </Nav>
          <NavbarText><span className={classes.colorText2}>Finding recipes with </span><span className={classes.colorText}>eaze.</span></NavbarText>
        </Collapse>
      </Navbar>
      <Switch>
            <Route exact path="/home"></Route>
            <Route exact path="/search"><Search/></Route>
            <Route exact path="/list"><ListDisplay token={sessionToken} /></Route>
      </Switch>
    </div>
  );
}

export default RecipeNavbar;