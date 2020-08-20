import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { Blog } from "./components/Blog";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
