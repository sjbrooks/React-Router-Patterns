import React from "react";
import { useParams } from 'react-router-dom';
import DogDetails from './DogDetails'

function DogFilter({ dogs }) {

  const { name } = useParams();

  if (name) {
    let dog = dogs.find(d => name.toLowerCase() === d.name.toLowerCase());

    return (
      <div>
        {dog ? <DogDetails dog={dog} /> : null}
      </div>
    );
  }

  return null;

  }

  export default DogFilter;
