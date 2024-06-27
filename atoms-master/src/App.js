import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Adminnav from "./components/Usernav";

const App = () => {
  let role = "user";

  if (role == "user") {
    return (
      <div>
        <Navbar />
        <Banner />
        <div className="row">
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
        </div>
      </div>
    );
  } else if (role == "admin") {
    return <Adminnav />;
  } else {
    return <h1>404 Not found</h1>;
  }
};

export default App;
