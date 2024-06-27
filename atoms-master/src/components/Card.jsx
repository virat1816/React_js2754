import React from "react";
import { Button } from "./Atoms/Atom";

const Card = () => {
  let CardTest = () => {
    console.log("card called");
  };

  return (
    <div class="card" style={{ width: "18rem" }}>
      <img
        class="card-img-top"
        src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        {/* <a href="#" >
          Go somewhere
        </a> */}
        <Button
          content="Go some where"
          classs="btn btn-primary"
          func={CardTest}
        />
      </div>
    </div>
  );
};

export default Card;
