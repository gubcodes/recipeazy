import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardSubtitle,
  CardText,
  CardTitle,
  Input,
} from "reactstrap";
import "./App.css";

import React from "react";

const Search = () => {
  return <div></div>;
};

export default Search;

const Search = () => {
  //   const key = "7e3ece4b23caceba0b10218d76df8b52";
  //   const appId = "776dedf5";
  //   const url = `https://api.edamam.com/search?q={input}&app_id=${appId}&app_key=${key}`;
  //
  //    let inputSearch = await fetch(url)
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (json) {
  //       console.log(json);
  //     });

  //   const [inputItems, setInputItems] = useState([]);
  //   const [recipes, setRecipes] = useState([]);

  //   useEffect(() => {
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => setRecipes);
  //   }, []);

  //   console.log(recipes);

  return (
    <>
      <div className="input-group col-6 offset 3">
        <div className="mainDiv">
          <Input
            type="text"
            placeholder="Search recipe by name, cuisine, mealtime, or ingredients"
          >
            Search a recipe by name, cuisine, mealtime, or ingredients
          </Input>
        </div>
      </div>
    </>
  );
};

export default Search;

// <InputGroup>
//   <InputGroupAddon addonType="prepend">
//     <InputGroupText>
//       <Input
//         addon
//         type="checkbox"
//         aria-label="Checkbox for following text input"
//       />
//     </InputGroupText>
//   </InputGroupAddon>
//   <Input placeholder="Check it out" />
// </InputGroup>;

// recipe results in cards; display after search is submitted and data is fetched
{
  /* <CardGroup>
  <Card>
    <CardImg
      top
      width="100%"
      src="${data.hits[i].recipe.image}"
      alt="recipic"
    />
    <CardBody>
      <CardTitle>{data.hits[i].recipe.label}</CardTitle>
      <CardSubtitle>Source: {data.hits[i].recipe.source}</CardSubtitle>
      <CardText>{data.hits[i].recipe.description}</CardText>
      <Button onClick="">Recipe</Button>
    </CardBody>
  </Card>
</CardGroup>; */
}
