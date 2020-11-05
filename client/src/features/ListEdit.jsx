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
            <ModalHeader style={{fontFamily: 'Grandstander'}}>Add a quick note or update quantity!</ModalHeader>
            <ModalBody>
                <Form onSubmit={ingredientUpdate}>
                    <FormGroup>
                        <Label htmlFor='comment' style={{fontFamily: 'Roboto'}}>Add Note:</Label>
                        <Input name='comment' value={editComment} onChange={(e) => setEditComment(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='quantity' style={{fontFamily: 'Roboto'}}>Update Quantity:</Label>
                        <Input name='quantity' value={editQuantity} onChange={(e) => setEditQuantity(e.target.value)} />
                    </FormGroup>
                    <Button type='submit' style={{backgroundColor: '#18E817',
                    borderRadius: '10px',
                    transition: 'transform 0.3s ease',
                    boxShadow: '5px 5px 5px 0px rgba(118,241,117,1)',
                    border: 'none',
                    fontFamily: 'Grandstander'
                    }} id="buttonHover">Update List</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default ListEdit;