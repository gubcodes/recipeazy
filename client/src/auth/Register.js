import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Register = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/user/register', {
            method: 'POST',
            body: JSON.stringify({user:{username: username, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }

    return(
        <div>
            <h1>Register</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Email: </Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password: </Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
                </FormGroup>
                <Button type="submit">Create Account!</Button>
            </Form>
        </div>
    )
}

export default Register;