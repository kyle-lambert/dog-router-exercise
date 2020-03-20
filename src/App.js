import React, { Component } from "react";
import Navbar from "./Navbar";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import dogimage from "./images/dog.jpg";

import { Switch, Route } from "react-router-dom";

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: dogimage,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: dogimage,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: dogimage,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  };

  render() {
    return (
      <div>
        <Navbar dogs={this.props.dogs} />
        <Switch>
          <Route
            exact
            path="/dogs"
            render={() => <DogList dogs={this.props.dogs} />}></Route>
          <Route exact path="/dogs/:name" render={() => <DogDetails />}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
