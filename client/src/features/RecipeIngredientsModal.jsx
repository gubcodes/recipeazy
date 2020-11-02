import React from "react";
import {Button} from 'reactstrap';

const Ingredients = (props) => {
    return props.recipe.ingredients.map((ingredients, index) => {
        return(
            <div>
                <tr key={index}>
                    <th scope="row">{ingredients}</th>
                    <td>{ingredients}</td>
                    <td>
                        <Button>Add</Button>
                        <Button>Delete</Button>
                    </td>
                </tr>
            </div>
        )
    })
    
}

export default Ingredients;
