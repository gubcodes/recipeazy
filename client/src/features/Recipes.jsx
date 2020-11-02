import React, { useState } from "react";
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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const Recipes = (props) => {
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
              <Button className="btn mb-1" type="submit" color="success">
                Recipe
              </Button>
            </CardBody>
          </Card>
        </CardGroup>
      </Col>
      {/* {recipes.length > 0 ? (
              recipes.map((recipe) => {
                return <Recipes recipe={recipe} />;
              })
            ) : (
              <div>
                <Jumbotron>
                  <h3 className="jumbo">Sorry, that's not on the menu!</h3>
                  <p className="lead">
                    We didn't find any recipes for that search. Since you're
                    still hungry, try again.
                  </p>
                  <hr className="my-2" />
                </Jumbotron>
              </div>
            )} */}
    </div>
  );
};

export default Recipes;
