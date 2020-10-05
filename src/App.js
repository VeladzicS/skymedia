import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portolio";
import Contact from "./pages/Contact/Contact";
import { Navbar, Footer, TopBar } from "./components";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollTop />
      <TopBar />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
