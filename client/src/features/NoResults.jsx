import React from "react";
import { Jumbotron } from "reactstrap";

const NoResults = () => {
  return (
    <div>
      <Jumbotron>
        <h3 className="jumbo">Sorry, that's not on the menu!</h3>
        <p className="lead">
          We didn't find any recipes for that search. Since you're still hungry,
          try a different search!
        </p>
        <hr className="my-2" />
      </Jumbotron>
    </div>
  );
};

export default NoResults;
