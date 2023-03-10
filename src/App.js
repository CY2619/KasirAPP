import React, { Component } from 'react'


import { NavbarComponent } from "./components";
import { Home, Sukses } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </Router>
  
    );
  }
}
