import React, {Component} from "react";
import ContactComponent from './ContactComponent'
import './App.css';
import Navbar from "./Navbar";


class App extends Component {
  render() {
    let name = "ahmad ben ahmad";
    let num1 = 12;
    let num2 = 120;
    return (
        <div className="App">
          <h1>salam mes chersdevloppeurs</h1>
          <input type="text" name="" id=""/>
            <h2>ahmad ben ahmad</h2>
            <p>{num1}+{num2}={num1 + num2}</p>
            <ContactComponent/>
            <ContactComponent/>
            <ContactComponent/>
            <Navbar/>
        </div>


  export default App;