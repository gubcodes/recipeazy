import React, { useState } from 'react';
import {
    Route,
    Link,
    Switch,
} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
import Search from '../features/Search';
import Auth from '../auth/Auth';
import Home from '../components/Home';


const RecipeNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [sessionToken, setSessionToken] = useState("");

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/home">recipeaze</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
            <Auth updateToken={updateToken}/>
            </NavItem>
            <NavItem>
              <NavLink href="/search">Recipe Search</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Shopping List</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
      <Switch>
            <Route exact path="/home"><Home/></Route>
            <Route exact path="/search"><Search/></Route>
      </Switch>
    </div>
  );
}

export default RecipeNavbar;