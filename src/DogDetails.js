import React from "react";
import {v4 as uuid} from 'uuid';

function DogDetails({name, age, src, facts}) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <img src={`/${src}.jpg`} alt={`${name} dog`} />
      <ul>
        {facts.map(
          f => (<li key={uuid()}>{f}</li>)
        )}
      </ul>
    </div>
  );
}

export default DogDetails;
