import React from 'react';
import './App.css';
import {Switch, Route, Redirect, useParams} from 'react-router-dom';
import DogList from './DogList'
import DogDetails from './DogDetails'

function App() {

  const {name} = useParams();

  let currDogIdx; 

  for (let i = 0; i < App.defaultProps.dogs; i++) {
    if (name === App.defaultProps.dogs[i].name) {
      currDogIdx = i;
    }
  }

  return (
    <Switch>
      <Route exact path="/dogs" >
        <DogList dogs={App.defaultProps.dogs}/> 
      </Route>
      <Route path="/dogs/:name" >
        <DogDetails dog={App.defaultProps.dogs[currDogIdx]}/> 
      </Route>
      <Redirect to="/dogs" />
    </Switch>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
