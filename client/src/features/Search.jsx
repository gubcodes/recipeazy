import React, { useState } from "react";
import { Input, Form, InputGroup, Container, Row, Button } from "reactstrap";
import Recipes from "./Recipes";

const Search = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  // const [pageNumber, setPageNumber] = useState(0);

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
      });
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    getData();
  };

  //   const recipe = () => {
  //     recipes.map((recipe, index) => {
  //       <Recipes recipe={recipe} index={index} />;
  //     });
  //   };

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
            {recipes.map((recipe, index) => {
              return <Recipes recipe={recipe} />;
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Search;
