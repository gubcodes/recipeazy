import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


const Register = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [registerModal, setRegisterModal] = useState(false);

  const toggle = () => setRegisterModal(!registerModal);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3001/user/register', {
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
      <Button color="danger" onClick={toggle}>Register{buttonLabel}</Button>
      <Modal isOpen={registerModal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Email: </Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name="email" type="email" value={email}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password: </Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" type="password" value={password}/>
                </FormGroup>
                <FormGroup>
                <Button color="primary" type="submit" onClick={toggle}>Create account!</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
                </FormGroup>
            </Form>        
            </ModalBody>
        <ModalFooter>
          
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Register;