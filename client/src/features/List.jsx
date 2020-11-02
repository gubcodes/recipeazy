import React, { useEffect, useState } from 'react';
import { Table, Button, Form, FormGroup, Label, Input, Container, Row, Col, ListTable, Card } from 'reactstrap';
import ListEdit from './ListEdit';
import ListTable from './ListIngredients';

const ListDisplay = (props) => {

    //plan:
    //pull user's list from datase
    //display list
    //edit item
    //delete item
    //checkbox for purchased, 'update' button deletes these items
    //add custom item (not in recipe)

    const [ ingredients, setIngredients ] = useState([]);
    const [ updateOpen, setUpdateOpen ] = useState(false);
    const [ ingredientToEdit, setIngredientToEdit ] = useState({});


    const fetchIngredients = () => {
        fetch(`https://group-4-recipeazy-server.herokuapp.com/list/getall`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            })
        }).then((res) => res.json())
        .then((listData) => {
            setIngredients(listData);
            console.log(listData);
        })
    }

    const editUpdateIngredient = (ingredient) => {
        setIngredientToEdit(ingredient);
        console.log(ingredient);
    }

    const updateOn = () => {
        setUpdateOpen(true);
    }

    const updateOff = () => {
        setUpdateOpen(false);
    }

    useEffect(() => {
        fetchIngredients();
    }, [])

    return(
        <Container>
            <Card body>
            <Row>
                <Col md="9">
                    <ListTable ingredients={ingredients} editUpdateIngredient={editUpdateIngredient} updateOn={updateOn} fetchIngredients={fetchIngredients} token={props.token}/>
                </Col>
                {updateOpen ? <ListEdit ingredientToEdit={ingredientToEdit}
                updateOff={updateOff} token={props.token} fetchIngredients={fetchIngredients} /> : <></>}
            </Row>
            </Card>
        </Container>
    )

}

export default ListDisplay;