import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


const Login = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginModal, setLoginModal] = useState(false);

  const toggle = () => setLoginModal(!loginModal);

  let handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3001/user/login', {
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
    <div>
      <Button color="danger" onClick={toggle}>Login{buttonLabel}</Button>
      <Modal isOpen={loginModal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
        <Form>
                <FormGroup>
                    <Label htmlFor="email">Email: </Label>
                    <Input onChange={(e) => setEmail(e.target.value)} type="email" name="email" value={email}/>
                    {/*pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" required */}
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password: </Label>
                    <Input onChange={(e) => setPassword(e.target.value)} type="password" name="password" value={password}/>
                </FormGroup>
            </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle} type="submit" onSubmit={handleSubmit}>Login</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Login;
