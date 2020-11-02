import React, {useState} from "react";
import {
  Col,
  Card,
  CardBody,
  CardImg,
  CardGroup,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
  Form, FormGroup, Modal, ModalHeader, ModalBody
} from "reactstrap";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Ingredients from './RecipeIngredientsModal';


const Recipes = (props) => {
  const [ingredient, setIngredient] = useState('');

  const addIngredient = (e) => {
    e.preventDefault();
    fetch('https://group-4-recipeazy-server.herokuapp.com/list/create', {
      method:'POST',
      body: JSON.stringify({listdata:{ingredient: ingredient, quantity: 1, comment: " "}}),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
      })
    }).then((res) => res.json())
    .then((listData) => {
      console.log(listData);
      setIngredient('');
    })
  }

  const [recipeModal, setRecipeModal] = useState(false);
  const toggle = () => setRecipeModal(!recipeModal);

  return (
    <div>
      <Col className="col-12">
        <CardGroup className="card-group m-3">
          <Card
            className="card overflow-auto"
            style={{
              maxWidth: "300px",
              maxHeight: "480px",
              minHeight: "480px",
            }}
          >
            <CardImg
              // className="rounded mx-auto d-block"
              top
              width="100%"
              src={props.recipe.recipe.image}
              alt="reci-pic"
            />
            <CardBody>
              <CardTitle>
                <b>{props.recipe.recipe.label}</b>
              </CardTitle>
              <CardSubtitle>Servings: {props.recipe.recipe.yield}</CardSubtitle>
              <CardText>
                Source: <i>{props.recipe.recipe.source}</i>
              </CardText>

              <Button color="danger" onClick={toggle}>Recipe</Button>
              <Modal isOpen={recipeModal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{props.recipe.recipe.label}</ModalHeader>
                <ModalBody>
                   {props.recipe.recipe.ingredients.map(ingredient => (<li>{ingredient.text} <button onClick={addIngredient}>Add</button></li>))}
                   
                </ModalBody>
                </Modal>
            </CardBody>
          </Card>
        </CardGroup>
      </Col>
    </div>
  );
};

export default Recipes;
