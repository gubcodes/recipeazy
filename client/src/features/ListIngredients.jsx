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
                    <th scope='row'>{ingredient.ingredient}</th>
                    <td>{ingredient.quantity}</td>
                    <td>{ingredient.comment}</td>
                    <td>
                        <Button className="listButton m-1" color='info' onClick={() => {props.editUpdateIngredient(ingredient); props.updateOn()}}><img src='../../assets/notes.png' width='20' height='20'></img></Button>
                        <Button className="listButton m-1" color='danger' onClick={() => {deleteIngredient(ingredient)}}><img src='../../assets/close.png' width='20' height='20'></img></Button>
                    </td>
                </tr>
            )
        })
    }

    return(
        <>
        <h3 style=
        {{color: '#E717E8', fontFamily: 'Grandstander'}}>Happy Shopping!</h3>
        <hr/>
        <Table style={{border: '4px dashed #E717E8'}}>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Qty.</th>
                    <th>Notes</th>
                    <th>Edit - Remove</th>
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