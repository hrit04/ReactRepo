import React from 'react'
import { useState } from 'react';

const User = (props) => {

    const [count] = useState();

    const {name, age} = props;
  return (
    <div className="user-card">
        <h1>Name : {name}</h1>
        <h2>Age : {age}</h2>

    </div>
  )
}

export default User