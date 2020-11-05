import React from 'react';
import { makeStyles, Toolbar } from '@material-ui/core';
import './Logo.css';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '5px',
        userSelect: 'none',
        MozUserSelect: 'none',
        WebkitUserSelect: 'none',
        msUserSelect: 'none'
    },
    colorText: {
        color: "#18E817",
        userSelect: 'none',
        MozUserSelect: 'none',
        WebkitUserSelect: 'none',
        msUserSelect: 'none'
    },
    colorText2: {
        color: "#E717E8",
        userSelect: 'none',
        MozUserSelect: 'none',
        WebkitUserSelect: 'none',
        msUserSelect: 'none'
    },
    title: {
        color: "white",
        fontFamily: "Grandstander",
        textAlign: 'Center',
        fontSize: '6rem',
        textShadow: "2px 2px 4px #000000",
        userSelect: 'none',
        MozUserSelect: 'none',
        WebkitUserSelect: 'none',
        msUserSelect: 'none'
    },
    bodyText: {
        fontFamily: "Roboto",
        padding: '20px',
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

      <h3 className={classes.bodyText}><span className={classes.colorText2} style=
        {{fontFamily: 'Grandstander', color: 'white'}}>Search for recipes and add the desired ingredients into your own personal shopping list!</span><div className='mt-3' id="edamam-badge" data-color="white"></div></h3>

      <br/>

      <div id='logo' class='logoAnimate'>
       <img src='../../assets/recipeazyLogo.png'></img>
      </div>
</div>
)}

export default Home;