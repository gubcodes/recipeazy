import React, { useEffect } from 'react';
import { Table, Button, Form, FormGroup, Label, Input } from 'reactstrap';
/*
const ShoppingList = (props) => {

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
                'Authorization': props.token
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

    return(*/
        {/*}
        <Container>
            <Row>
                <Col md='3'>
                    {/* render a button here to open modal with custom ingredient add
                </Col>
                <Col md="9">
                    {/* render ingredient table here 
                </Col>
            </Row>
        </Container>
    )
    
}*/}
//TODO: add the list table component, the edit component (and add custom component that will be mostly identical with POST instead of PUT), and the list page component to put them all in