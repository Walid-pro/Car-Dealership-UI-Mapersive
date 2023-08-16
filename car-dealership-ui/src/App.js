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

function App({ Link }) {

  const homeLink="https://walid-pro.github.io/car-dealership-react-app/"

  return (
    <div className="App">
      <div className="wrapper">
        <Image src={Rectangle} className="rectangle-bg" />
        <header className="App-header">
          <NavBar Link={homeLink}/>
        </header>
        <Hero />
      </div>
      <Mobiling Link={homeLink}/>
      <About />
      <Footer Link={homeLink}/>
    </div>
  );
}

export default App;
