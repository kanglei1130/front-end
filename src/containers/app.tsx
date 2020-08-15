import React, { Component } from "react";
import Home from "./home";
import Head from "./head";
import Footer from "./footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Head />
        <Home />
        <Footer />
      </div>
    );
  }
}
