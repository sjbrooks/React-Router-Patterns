import React from "react";
import { v4 as uuid } from 'uuid';
import { useParams, Link, Redirect } from 'react-router-dom';

function DogDetails({ dogs }) {
  
  const {name} = useParams();
  
  let dog = dogs.find(d => name.toLowerCase() === d.name.toLowerCase())
  
  if (!dog) return <Redirect to="/dogs"/>
 
  let {age, src, facts} = dog;
  // let currDogIdx;

  // for (let i = 0; i < dogs.length; i++) {
  //   if (name.toLowerCase() === dogs[i].name.toLowerCase()) {
  //     currDogIdx = i;
  //   }
  // }

  // let {age, src, facts} = dogs[currDogIdx];

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
