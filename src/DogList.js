import React from "react";
import {v4 as uuid} from 'uuid';
import DogDetails from './DogDetails'

function DogList({dogs}) {
  return (
    <div>
      {dogs.map(
        d =>
        <DogDetails key={uuid()} dog={d} />)}
    </div>
  );
}

export default DogList;
