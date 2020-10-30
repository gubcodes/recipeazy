import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Register from './Register';
import Login from './Login';

const Auth = (props) => {
    return(
        <Container className="auth-container">
            <Row>
                <Col md="6">
                    <Register updateToken={props.updateToken}/>
                </Col>
                <Col md="6">
                    <Login updateToken={props.updateToken}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;