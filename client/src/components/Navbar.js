import React, { useState } from 'react';
import { makeStyles, Toolbar } from '@material-ui/core';
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
import ListDisplay from '../features/List';


const useStyles = makeStyles((theme) => ({
  colorText: {
      fontFamily: "Grandstander",
      color: "#18E817",
      userSelect: 'none',
      MozUserSelect: 'none',
      WebkitUserSelect: 'none',
      msUserSelect: 'none'
  },
  colorText2: {
      fontFamily: "Grandstander",
      color: "#E717E8",
      userSelect: 'none',
      MozUserSelect: 'none',
      WebkitUserSelect: 'none',
      msUserSelect: 'none'
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
    localStorage.clear("token");
    setSessionToken('');
    alert('You have been successfully logged out.') //added by jesse 11/3 6:15pm
  };

  
  return (
    <div className={classes.root}>
      <Navbar color="light" light expand="md" fixed="top">
        <NavbarBrand href="/home"><span className={classes.colorText2}>Recip</span><span className={classes.colorText}>Eazy</span></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            
            <NavItem>
            {localStorage.getItem('token') !== null ? <NavLink href="/search"><span className={classes.colorText2}>Recipe Search</span></NavLink>
            : null}
            </NavItem>
            <NavItem>
            {localStorage.getItem('token') !== null ? <NavLink href="/list"><span className={classes.colorText}>Shopping List</span></NavLink>
            : null}
            </NavItem>
          </Nav>
          <Nav>
            <Auth updateToken={updateToken}/>
          </Nav>
          <NavLink href="/home">
            {localStorage.getItem('token') !== null ? <Button className={classes.button1} id="buttonHover"
            style={{ marginRight: 25,
            backgroundColor: '#E717E8',
            borderRadius: '10px',
            transition: 'transform 0.3s ease',
            boxShadow: '5px 5px 5px 0px rgba(231,23,232,0.3)',
            border: 'none' }} onClick={logOut}>Log out</Button> 
            : null}

            </NavLink>
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