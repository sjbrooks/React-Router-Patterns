import React from "react";
import { v4 as uuid } from 'uuid';
import { useParams, Link, Redirect } from 'react-router-dom';
import "./DogDetails.css"

function DogDetails({ dog }) {
  
  if (!dog) return <Redirect to="/dogs"/>
 
  let {name, age, src, facts} = dog;

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <img src={src} alt={`${name} dog`} />
      <ul>
        {facts.map(
          f => (<li key={uuid()}>{f}</li>)
        )}
      </ul>
      <Link to='/dogs'>Back</Link>
    </div>
  );
}

export default DogDetails;
