import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Register from './Register';
import Login from './Login';
import "bootstrap/dist/css/bootstrap.min.css";

const Auth = (props) => {
    return(
        <Container className="auth-container">
            <Col>
                    <Register updateToken={props.updateToken}/>
            </Col>
            <Col/>
            <Col>
                    <Login updateToken={props.updateToken}/>
            </Col>
        </Container>
    )
}

export default Auth;