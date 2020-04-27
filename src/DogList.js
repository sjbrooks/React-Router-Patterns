import React from "react";
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';
import "./DogList.css"

function DogList({ dogs }) {

  return (
    <div>
      {dogs.map(
        d => (
          <div key={uuid()}>
            <h2>
              <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
            </h2>
            <img src={d.src} alt={`${d.name} dog`} />
          </div>
        ))}
    </div>
  );
}

export default DogList;
