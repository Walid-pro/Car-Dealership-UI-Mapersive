import "./App.css";
import React from "react";
//Import bootsrap styling
import "bootstrap/dist/css/bootstrap.min.css";
//Navbar component
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Mobiling from "./components/Mobiling";
import About from "./components/About";
import Rectangle from "./Assets/rectangle-bg.png";
import Footer from "./components/Footer";
import Image from "react-bootstrap/Image";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Image src={Rectangle} className="rectangle-bg" />
        <header className="App-header">
          <NavBar />
        </header>
        <Hero />
      </div>
      <Mobiling />
      <About />
      <Footer />
    </div>
  );
}

export default App;
