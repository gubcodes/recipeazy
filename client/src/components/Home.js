import React, { useEffect, useState } from 'react'
import { AppBar, IconButton, makeStyles, Toolbar, } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '5px'
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
    bodyText: {
        fontFamily: "Roboto",
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        backgroundColor: '#18E817',
        maxWidth: '55%',
        borderRadius: '10px',
    }
}));


function Home(props) {
    const classes = useStyles();
    return(
    <div className={classes.container}>
        <br/>
        <br/>
        <br/>
    <h1 className={classes.title}>
        Grocery
     <span className={classes.colorText}> Shop</span> <br /> 
        With
      <span className={classes.colorText2}> Us</span></h1>
      <br/>
      <br/>
      <br/>
      <h3 className={classes.bodyText}><span className={classes.colorText2}>Search for recipes and add the desired ingredients into your own personal shopping list!</span></h3>
</div>
)}

export default Home;