import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardGroup,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

const Recipes = (props) => {
  return (
    <div>
      <Col className="col-12">
        <CardGroup className="card-group m-3">
          <Card style={{ maxWidth: "300px" }}>
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
              <br />
              <CardText>Source: {props.recipe.recipe.source}</CardText>
              <Button>Recipe</Button>
            </CardBody>
          </Card>
        </CardGroup>
      </Col>
    </div>
  );
};

export default Recipes;
