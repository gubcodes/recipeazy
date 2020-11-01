import React from "react";
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
} from "reactstrap";

const Recipes = (props) => {
  return (
    <div>
      <Col className="col-12">
        <CardGroup className="card-group m-3">
          <Card
            className="card"
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
              <br />
              <CardText>
                Source: <i>{props.recipe.recipe.source}</i>
              </CardText>
              <Button className="btn" type="submit" color="success">
                Recipe
              </Button>
            </CardBody>
          </Card>
        </CardGroup>
      </Col>
    </div>
  );
};

export default Recipes;
