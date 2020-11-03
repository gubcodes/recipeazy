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
import { makeStyles } from '@material-ui/core';
import Recipes from "./Recipes";


const Search = () => {
  const useStyles = makeStyles((theme) => ({
    colorText: {
        fontFamily: "Grandstander",
        color: "#18E817",
    },
    colorText2: {
        fontFamily: "Grandstander",
        color: "#E717E8",
    },
    customBg: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      color: "whitesmoke",
    },
    customText: {
      fontFamily: "Grandstander",
    }
  }));
  const classes = useStyles();

  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [foodId, setFoodId] = useState(0);
  const [searchMessage, setSearchMessage] = useState(`What's on the menu? Try something new tonight!`)
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
          setSearchMessage(`Oh no! We did not find anything for that!`)
        } else {
          setSearchMessage(`What's on the menu? Try something new tonight!`)
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
      <div className="main m-5 p-2 col-8 shadow-lg p-3 mb-5 bg-white rounded"> 
        <div className="mainDiv">
          <h3 className="search mb-3 p-1" style={{ backgroundColor: "rgba(0, 0, 0, 0.35)", color: "white", fontFamily: "Grandstander" }}>
            Recipe Search
          </h3> 
          {/* /* className={classes.colorText}>Recipe Search</h3> */} 
          <Form className="form" onSubmit={onSubmit}>
            <InputGroup size="lg">
              <Input
                className="input col-6"
                type="text"
                placeholder="Search by name, cuisine, mealtime, or ingredients"
                onChange={onChange}
                value={query}
                style={{fontFamily: 'Grandstander'}}
              />
              <div class="input-group-append">
                <Button className="btn" type="submit" style={{backgroundColor: '#18E817', border: 'none', fontFamily: 'Grandstander'}}>
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
                  <h3 className="jumbo" style={{fontFamily: 'Grandstander'}}>{searchMessage}</h3>
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
