import React from "react";
import {v4 as uuid} from 'uuid';

function DogDetails({name, age, src, facts}) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {name}</p>
      <img src={``} />
    </div>
  );
}

export default DogDetails;
