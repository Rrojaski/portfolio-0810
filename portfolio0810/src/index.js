import React from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import "reset.css";
import "./styles.css";
import Content from "./layout/Content/Content";
import { HashRouter } from "react-router-dom";

//removed Header
function App() {
  return (
    <React.Fragment>
      <HashRouter>
        <Header />
        <Content />
        <Footer />
      </HashRouter>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
