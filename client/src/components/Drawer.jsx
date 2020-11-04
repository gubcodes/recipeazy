import React, {useState, useEffect} from "react";
import { Drawer as MUIDrawer, List, ListItem, ListItemText } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Auth from '../auth/Auth'

const Drawer = () => {

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


    return (
        <MUIDrawer className="Drawer" open={false} anchor="right">
          <IconButton >
            <ChevronRightIcon/>
          </IconButton>
         <List>
          {[<Auth updateToken={updateToken}/>, 'Recipes', 'My List', 'Grocery Stores'].map((text, index) => (
            <ListItem button key={text}>
              
              <ListItemText primary={text} />
            </ListItem>
            
          ))}
        </List>
        
        </MUIDrawer>
    );
};

export default Drawer;