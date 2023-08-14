import "./App.css";
import React from "react";
//Import bootsrap styling
import 'bootstrap/dist/css/bootstrap.min.css';
//Navbar component
import NavBar from "./components/Navbar"


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      </header>
    </div>
  );
}

export default App;
