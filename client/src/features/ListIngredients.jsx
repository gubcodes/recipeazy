import React from 'react';
import { Table, Button } from 'reactstrap';

const ListTable = (props) => {

    const deleteIngredient = (ingredient) => {
        fetch(`https://group-4-recipeazy-server.herokuapp.com/list/${ingredient.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            })
        })
        .then(() => props.fetchIngredients())
    }

    const ingredientMap = () => {
        return props.ingredients.map((ingredient, index) => {
            return(
                <tr key={index}>
                    {/* <th scope='row'>{ingredient.id}</th> */}
                    <th scope='row'>{ingredient.ingredient}</th>
                    <td>{ingredient.quantity}</td>
                    <td>{ingredient.comment}</td>
                    <td>
                        <Button color='info' onClick={() => {props.editUpdateIngredient(ingredient); props.updateOn()}}>Add Note</Button>
                        <Button color='danger' onClick={() => {deleteIngredient(ingredient)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }

    return(
        <>
        <h3>Happy Shopping!</h3>
        <p>Don't forget to try the 'Add Note' button to add reminders and adjust quantities!</p>
        <hr/>
        <Table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Qty.</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
                {ingredientMap()}
            </tbody>
        </Table>
        </>
    )
}

export default ListTable;