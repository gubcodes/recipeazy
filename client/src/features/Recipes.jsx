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
      setRecipeModal(!recipeModal);
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
                <b style={{fontFamily: 'Grandstander'}}>{props.recipe.recipe.label}</b>
              </CardTitle>
              <CardSubtitle style={{fontFamily: 'Roboto'}}>Servings: {props.recipe.recipe.yield}</CardSubtitle>
              <CardText style={{fontFamily: 'Roboto'}}>
                Source: <i>{props.recipe.recipe.source}</i>
              </CardText>

              <Button color="success" id="buttonHover" style={{fontFamily: 'Grandstander', backgroundColor: '#E717E8',
              borderRadius: '10px',
              transition: 'transform 0.3s ease',
              boxShadow: '5px 5px 5px 0px rgba(231,23,232,0.3)',
              border: 'none'}} onClick={toggle}>Recipe</Button>
              <Modal isOpen={recipeModal} toggle={toggle}>
                <ModalHeader style={{fontFamily: 'Grandstander'}} toggle={toggle}>{props.recipe.recipe.label}</ModalHeader>
                <ModalBody style={{fontFamily: 'Roboto'}}>
                   {props.recipe.recipe.ingredients.map((ingredient) => (<li>{ingredient.text}</li>))}
                   <Button style={{backgroundColor: '#18E817', fontFamily: 'Grandstander', border: 'none', borderRadius: '10px', boxShadow: '5px 5px 5px 0px rgba(118,241,117,1)', transition: 'transform 0.3s ease'}} id='buttonHover' onClick={addIngredient}>Add to Shopping List</Button>
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
