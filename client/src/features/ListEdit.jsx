import React, { useState } from 'react';
import {Form, FormGroup, Modal, ModalBody, ModalHeader, Label, Input, Button } from 'reactstrap';

const ListEdit = (props) => {
    const [ editQuantity, setEditQuantity ] = useState(props.ingredientToEdit.quantity);
    const [ editComment, setEditComment ] = useState(props.ingredientToEdit.comment);
    //maybe add editIngredient

    const ingredientUpdate = (event, ingredient) => {
        event.preventDefault();
        fetch(`https://group-4-recipeazy-server.herokuapp.com/list/${props.ingredientToEdit.id}`, {
            method: 'PUT',
            body: JSON.stringify({listdata: {quantity: editQuantity, comment: editComment}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            })
        }).then((res) => {
            props.fetchIngredients();
            props.updateOff();
        })
    }

    return (
        <Modal isOpen={true}>
            <ModalHeader>Add a quick note or update quantity!</ModalHeader>
            <ModalBody>
                <Form onSubmit={ingredientUpdate}>
                    <FormGroup>
                        <Label htmlFor='comment'>Add Note:</Label>
                        <Input name='comment' value={editComment} onChange={(e) => setEditComment(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='quantity'>Update Quantity:</Label>
                        <Input name='quantity' value={editQuantity} onChange={(e) => setEditQuantity(e.target.value)} />
                    </FormGroup>
                    <Button type='submit'>Update List</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default ListEdit;