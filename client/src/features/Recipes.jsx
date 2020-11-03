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


const Recipes = (props) => {
  console.log(props.ingredients);
  console.log(props.title);
  console.log(props.recipe)
  const [ingredient, setIngredient] = useState(props.ingredients);
  const [comment, setComment] = useState('');
  const addIngredient = (e) => {
    ingredient.map((ingredients) => {

    
    e.preventDefault();
    fetch('https://group-4-recipeazy-server.herokuapp.com/list/create', {
      method:'POST',
      body: JSON.stringify({listdata:{ingredient: ingredients.text, quantity: 1, comment: comment}}),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
      })
    }).then((res) => res.json())
    .then((listData) => {
      console.log(listData);
    })
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

              <Button color="success" onClick={toggle}>Recipe</Button>
              <Modal isOpen={recipeModal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{props.recipe.recipe.label}</ModalHeader>
                <ModalBody>
                   {props.recipe.recipe.ingredients.map((ingredient) => (<li>{ingredient.text}</li>))} <button onClick={addIngredient}>Add</button>
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
