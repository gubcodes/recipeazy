import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import {makeStyles} from '@material-ui/core';
import "bootstrap/dist/css/bootstrap.min.css";


const useStyles = makeStyles((theme) => ({
  root: {

      fontFamily: "Grandstander",

  },
  button1: {
    fontFamily: "Grandstander",
    color: "#18E817",
    backgroundColor: "#E717E8"
  }

}));

const Login = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginModal, setLoginModal] = useState(false);

  const toggle = () => setLoginModal(!loginModal);

  let handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://group-4-recipeazy-server.herokuapp.com/user/login', {
        method: 'POST',
        body: JSON.stringify({user:{email: email, password: password}}),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(
        (response) => response.json()
    ).then((data) => {
        props.updateToken(data.sessionToken)
    })
}

  return (
    <div className={classes.root}>
      {localStorage.getItem('token') === null ? <Button style={{backgroundColor: '#18E817',
        borderRadius: '10px',
        transition: 'transform 0.3s ease',
        boxShadow: '5px 5px 5px 0px rgba(118,241,117,1)',
        border: 'none'
        }} id="buttonHover" onClick={toggle}>Login{buttonLabel}</Button>
        : null}
      <Modal isOpen={loginModal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} style={{fontFamily: 'Grandstander'}}>Welcome back!</ModalHeader>
        <ModalBody>
        <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email" style={{fontFamily: 'Roboto'}}>Email: </Label>
                    <Input onChange={(e) => setEmail(e.target.value)} type="email" name="email" value={email}/>
                    
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password" style={{fontFamily: 'Roboto'}}>Password: </Label>
                    <Input onChange={(e) => setPassword(e.target.value)} type="password" name="password" value={password}/>
                </FormGroup>
                <FormGroup>
                <Button style={{backgroundColor: '#18E817',
                fontFamily: 'Grandstander',
                borderRadius: '10px',
                transition: 'transform 0.3s ease',
                boxShadow: '5px 5px 5px 0px rgba(118,241,117,1)',
                border: 'none'
                }} id="buttonHover" onClick={toggle} type="submit">Login</Button>{' '}
                <Button color="danger" id="buttonHover" style=
                {{borderRadius: '10px',
                fontFamily: 'Grandstander',
                transition: 'transform 0.3s ease',
                boxShadow: '5px 5px 5px 0px rgba(231,23,232,0.3)',
                border: 'none'}}
                onClick={toggle}>Cancel</Button>
                </FormGroup>
            </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Login;
