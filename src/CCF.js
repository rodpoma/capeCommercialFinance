import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import {BrowserRouter, Route} from "react-router-dom";
import "./CCF.css";

const CCF = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/products" component={Products} />
      </div>
    </BrowserRouter>
  );
};

export default CCF;
