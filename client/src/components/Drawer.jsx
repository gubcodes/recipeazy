import React from "react";
import { Drawer as MUIDrawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//     Drawer: {
//         width: '160px',
//     }
// }),

const Drawer = () => {
    //const classes = useStyles();
    return (
        <MUIDrawer className="Drawer" open={false} anchor="right">
         <List>
          {['Register / Login', 'Recipes', 'My List', 'Grocery Stores'].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        </MUIDrawer>
    );
};

export default Drawer;