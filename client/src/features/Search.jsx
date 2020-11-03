import React, { useState } from "react";
import {
  Input,
  Form,
  InputGroup,
  Container,
  Row,
  Button,
  Jumbotron,
} from "reactstrap";
import Recipes from "./Recipes";

const Search = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [foodId, setFoodId] = useState(0);
  const [searchMessage, setSearchMessage] = useState('Try searching above!')
  const key = "7e3ece4b23caceba0b10218d76df8b52";
  const appId = "776dedf5";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${key}`;

  const getData = () => {
    let data = fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecipes(data.hits); //map over array?
        setQuery("");
        if (recipes.length === 0) {
          setSearchMessage('OOPS! YA MESSED UP!')
        } else {
          setSearchMessage('Try searching above!')
        }
      });
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    getData();
  };

  console.log(recipes);

  return (
    <>
      <div className="main m-5 p-2 col-10">
        <div className="mainDiv">
          <h3 className="search mb-3" style={{ color: "white" }}>
            Recipe Search
          </h3>
          <Form className="form" onSubmit={onSubmit}>
            <InputGroup size="lg">
              <Input
                className="input col-6"
                type="text"
                placeholder="Search by name, cuisine, mealtime, or ingredients"
                onChange={onChange}
                value={query}
              />
              <div class="input-group-append">
                <Button className="btn" type="submit" color="success">
                  Search
                </Button>
              </div>
            </InputGroup>
          </Form>
          <br />
          <br />
        </div>
      </div>
      <div>
        <Container>
          <Row>
            {recipes.length === 0 ? (
              <div id="searchResult">
                <Jumbotron>
                  <h3 className="jumbo">What's on the menu?</h3>
                  <p className="lead">
                  {searchMessage}
                  </p>
                  <hr className="my-2" />
                </Jumbotron>
              </div>
            ) : (
            recipes.slice(0,9).map((recipe) => 
            <Recipes recipe={recipe} title={recipe.recipe.label} ingredients={recipe.recipe.ingredients} />)
            )}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Search;
