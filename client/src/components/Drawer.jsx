import React, {useState, useEffect} from "react";
import {Collapse} from 'reactstrap';
import { Drawer as MUIDrawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from "@material-ui/core/styles";
import Auth from '../auth/Auth'

// const useStyles = makeStyles((theme) => ({
//     Drawer: {
//         width: '160px',
//     }
// }),

const Drawer = () => {
    //const classes = useStyles();
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

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
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