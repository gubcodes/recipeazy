import React from 'react'
import { AppBar, makeStyles, Toolbar, } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            padding: '5px',
            MozUserSelect: "none",
            WebkitUserSelect: "none",
            msUserSelect: "none",
            userSelect: 'none'
        },
        AppBar:{
            textAlign: 'right',
            padding: '5px',
            background:"none",
            fontFamily: "Grandstander",
        },
        appBarWrapper: {
            width: '90%',
            margin: '2rem auto',
        },
        icon: {  
            color: 'white' ,
            fontSize: '3rem',
        },
        AppBarTitle: {
            flexGrow: '1',
            fontSize: '3.5rem',
            textShadow: "2px 2px 4px #000000",
        },
        container: {
            textAlign: 'center',
        },
        colorText: {
            color: "#18E817",
        },
        colorText2: {
            color: "#E717E8",
        },
        title: {
            color: "white",
            fontFamily: "Grandstander",
            textAlign: 'Center',
            fontSize: '6rem',
            textShadow: "2px 2px 4px #000000",
        },
        downArrow: {
            color: 'white',
            fontSize: '4rem',
            justifyContent: 'center',
            textAlign: 'center',
        }
}));


function Header(props) {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <AppBar className={classes.AppBar} elevation={0}>
                <Toolbar className={classes.appBarWrapper}>
                <h1 className={classes.AppBarTitle}><span className={classes.colorText2}>Recip</span><span className={classes.colorText}>Eazy</span></h1>
                
                </Toolbar>
            </AppBar>
            
            <div className={classes.container}>
                <h1 className={classes.title}>
                    Grocery
                 <span className={classes.colorText}> Shop</span> <br /> 
                    With
                  <span className={classes.colorText2}> Us</span></h1>
            </div>
        </div>
    )
};

export default Header;
