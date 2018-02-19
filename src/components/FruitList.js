import React from 'react';

const FruitList = props => (
      <ul>
      	{props.fruits.map((fruit,index) => <li key={index}>{fruit}</li>)}
      </ul>
);

export default FruitList;
