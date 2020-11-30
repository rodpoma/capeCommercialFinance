import React from "react";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import {BrowserRouter, Route} from "react-router-dom";
import {MDBContainer} from "mdbreact";

import "./CCF.css";
import "mdbreact/dist/css/mdb.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const CCF = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <MDBContainer
        fluid
        style={{
          backgroundColor: "#0b0633",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/products" component={Products} />
      </MDBContainer>
    </BrowserRouter>
  );
};

export default CCF;
