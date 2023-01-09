import React, {Component} from "react";

import './App.css';


class App extends Component {
    render() {
        let name = "ahmad ben ahmad";
        let num1 = 12;
       let num2 = 120;
        return (
            <div className="App">
                <h1>salam mes chers developpeurs</h1>
                <label htmlFor="name">{name}</label>
                <input type="number" name=""id=""/>
                <p>{num1}+{num2}={num1+num2}</p>
            </div>
        )
    }

}


export default App;