import "./App.css";
import React from "react";
//Import bootsrap styling
import "bootstrap/dist/css/bootstrap.min.css";
//Navbar component
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Mobiling from "./components/Mobiling"
import About from "./components/About"
import Rectangle from "./Assets/rectangle-bg.png"

function App() {
  return (
    <div className="App">
    <div className="wrapper" style={{ backgroundImage:`url(${Rectangle})`}}>
      <header className="App-header">
        <NavBar />
      </header>
      <Hero />
      </div>
      <Mobiling />
      <About />

    </div>
  );
}

export default App;
